"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Fcm.module.css";
import { useAuth } from "../src/context/AuthContext";
import { useRouter } from "next/router";
import { getToken, onMessage, getMessaging } from "firebase/messaging";
import { messaging } from "../src/firebaseinitialize";
import axios from "axios"; // Axios는 HTTP 요청을 보내기 위한 라이브러리입니다.

const Firebase = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [token, setToken] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("상품 예약");
  const [createdFcmTokenDateTime, setCreatedDateTime] = useState(null);
  const [title1, setTitle1] = useState("");
  const [body1, setBody1] = useState("");
  const [timeInput1, setTimeInput1] = useState("");
  const [title2, setTitle2] = useState("");
  const [body2, setBody2] = useState("");
  const [timeInput2, setTimeInput2] = useState("");
  const [title3, setTitle3] = useState("");
  const [body3, setBody3] = useState("");
  const [timeInput3, setTimeInput3] = useState("");
  const [fileInput1, setFileInput1] = useState(null);
  const [fileInput2, setFileInput2] = useState(null);
  const [fileInput3, setFileInput3] = useState(null);
  const [dateInput1, setDateInput1] = useState(""); // for yyyy-MM-dd
  const [dateInput2, setDateInput2] = useState(""); // for yyyy-MM-dd
  const [dateInput3, setDateInput3] = useState(""); // for yyyy-MM-dd

  const [notification, setNotification] = useState(null);

  const { accessToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);

          // // Handle foreground messages
          // const unsubscribe = onMessage(messaging, (payload) => {
          //   console.log("Message received. ", payload);

          //   const title = payload.notification?.title || "Default Title";
          //   const body = payload.notification?.body || "Default body";

          //   setNotification({ title, body });
          // });

          // return () => unsubscribe();
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    } else {
      console.log("Service Worker not supported in this browser.");
    }
  }, []);

  // Check login status and get user info
  useEffect(() => {
    if (accessToken) {
      fetch("/api/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoggedIn(true);
          setUsername(data.username);
        })
        .catch(() => {
          setIsLoggedIn(false);
          setUsername("");
        });
    }
  }, [accessToken]);

  useEffect(() => {
    // Function to format the date to yyyy-MM-dd
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    // Set the default date to today
    setDateInput1(getCurrentDate());
    setDateInput2(getCurrentDate());
    setDateInput3(getCurrentDate());
  }, []);

  const requestPermission = async () => {
    if (typeof window !== "undefined") {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          setPermissionGranted(true);
          console.log("Notification permission granted.");
          return true;
        } else {
          console.log("Notification permission denied.");
          return false;
        }
      } catch (error) {
        console.error("An error occurred while requesting permission.", error);
        return false;
      }
    }
    return false;
  };

  const getTokenHandler = async () => {
    if (permissionGranted && messaging) {
      try {
        const currentToken = await getToken(messaging, {
          vapidKey:
            "BAW2Lra5NjdxGfNjJ0LJfg2o1qBVlVdtgeQ64GMzv28aBTdVEPj8EtTAfl3OKLW1dyytI0Sh9nGZy_T9aDJ40dA",
        });

        if (currentToken) {
          const createdDateTime = new Date()
            .toISOString()
            .replace("T", " ")
            .split(".")[0];
          setCreatedDateTime(createdDateTime);
          setToken(currentToken);
          console.log("Token:", currentToken);
          return currentToken;
        } else {
          console.log("No registration token available.");
          return null;
        }
      } catch (error) {
        console.error("An error occurred while retrieving token.", error);
        return null;
      }
    } else {
      console.log("Permission not granted yet or messaging not initialized.");
      return null;
    }
  };

  const subscribeFcmService = async () => {
    try {
      // 권한 요청
      const permissionGranted = await requestPermission();
      if (!permissionGranted) {
        console.error("Permission not granted.");
        return;
      }

      // FCM 토큰 발급
      const currentToken = await getTokenHandler();
      if (!currentToken) {
        console.error("Failed to get current token.");
        return;
      }

      console.log("Token:", currentToken);
      console.log("Access Token:", accessToken);

      // 토큰을 서버에 저장
      const tokenSaveResponse = await fetch(
        "http://localhost:8080/api/fcm/register/fcm_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            fcmToken: currentToken,
            createdDateTime: createdFcmTokenDateTime,
          }),
        }
      );

      if (!tokenSaveResponse.ok) {
        throw new Error(`Error saving token: ${tokenSaveResponse.statusText}`);
      }

      console.log("Token saved successfully.");

      // FCM 서비스 구독 요청
      const response = await fetch(
        "http://localhost:8080/api/fcm/register/fcm_service_details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to subscribe to FCM Service: ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Subscription successful:", data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleLogin = () => {
    const redirectUrl = encodeURIComponent(router.asPath);
    router.push(`/loginPage?redirect=${redirectUrl}`).catch((error) => {
      console.error("Failed to redirect to login page:", error);
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [fileNames, setFileNames] = useState({
    fileInput1: "이미지를 업로드 해주세요",
    fileInput2: "이미지를 업로드 해주세요",
    fileInput3: "이미지를 업로드 해주세요",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imgId = event.target.dataset.imgId;
    const inputId = event.target.id;

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgElement = document.getElementById(imgId);
        if (imgElement) {
          imgElement.src = e.target.result;
        }
      };
      reader.readAsDataURL(file);

      setFileNames((prevFileNames) => ({
        ...prevFileNames,
        [inputId]: file.name,
      }));

      // Save the file in state
      if (inputId === "fileInput1") {
        setFileInput1(file);
      } else if (inputId === "fileInput2") {
        setFileInput2(file);
      } else if (inputId === "fileInput3") {
        setFileInput3(file);
      }
    }
  };
  const handleReservation = async (e) => {
    e.preventDefault();

    // Ensure date and time inputs are in the correct format
    const formattedDateTime = `${dateInput1} ${timeInput1}:00`;

    // Create FormData object
    const formData = new FormData();
    formData.append("title", title1);
    formData.append("body", body1);
    formData.append("reserveDateTime", formattedDateTime);

    // Append files if present
    if (fileInput1) formData.append("image", fileInput1);
    if (fileInput2) formData.append("image", fileInput2);
    if (fileInput3) formData.append("image", fileInput3);

    // Log the formatted date-time and FormData object
    console.log("Formatted DateTime:", formattedDateTime);
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/fcm/reserve/fcm",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Reservation Success:", response.data);
    } catch (error) {
      console.error("Reservation Failure:", error);
    }
  };

  return (
    <div className={styles.div}>
      <div className={styles.header}>
        <div className={styles.title}>다훑어-가게관리</div>
        <div className={styles.authGroup}>
          {!isLoggedIn ? (
            <button onClick={handleLogin} className={styles.loginButton}>
              로그인
            </button>
          ) : (
            <>
              <div className={styles.username}>{username}</div>
              <div className={styles.logoutWrapper}>
                <div className={styles.logout} onClick={handleLogout}>
                  로그아웃
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.main}>
        {/* 로그인을 하지 않으면 로그인후 이용해달라는 요청 메세지 출력 */}
        {!isLoggedIn ? (
          <div className={styles.message}>로그인 후 이용해주세요.</div>
        ) : (
          <>
            {notification && (
              <div className={styles.notification}>
                <h4>{notification.title}</h4>
                <p>{notification.body}</p>
              </div>
            )}
            <div className={styles.sidebar}>
              <ul className={styles.sidepage}>
                <li>
                  <a href="#" onClick={() => setSelectedMenu("상품 예약")}>
                    상품 예약
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setSelectedMenu("상품 발송내역")}>
                    상품 발송내역
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setSelectedMenu("구독 서비스 신청")}
                  >
                    구독 서비스 신청
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.body}>
              {/* selectedMenu에 따라 body 내용을 변경 */}
              {selectedMenu === "상품 예약" && (
                <>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageBox}>
                      <input
                        type="file"
                        id="fileInput1"
                        className={styles.fileInput}
                        accept="image/*"
                        data-img-id="uploadedImage1"
                        onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="fileInput1"
                        className={styles.uploadLabel}
                      >
                        <img
                          id="uploadedImage1"
                          src="https://example.com/default_image.png"
                          className={styles.uploadIcon}
                          alt="Upload icon"
                        />
                        <p className={styles.uploadText}>
                          {fileNames.fileInput1}
                        </p>
                      </label>
                    </div>

                    <input
                      type="text"
                      className={styles.titleInput}
                      placeholder="제목을 입력하세요"
                      value={title1}
                      onChange={(e) => setTitle1(e.target.value)}
                    />
                    <textarea
                      className={styles.bodyInput}
                      placeholder="본문을 입력하세요"
                      value={body1}
                      onChange={(e) => setBody1(e.target.value)}
                    ></textarea>
                    <input
                      type="date"
                      className={styles.dateInput}
                      value={dateInput1}
                      onChange={(e) => setDateInput1(e.target.value)}
                    />
                    <input
                      type="time"
                      className={styles.timeInput}
                      value={timeInput1}
                      onChange={(e) => setTimeInput1(e.target.value)}
                    />
                    <button
                      className={styles.registrationBtn}
                      onClick={handleReservation}
                    >
                      예약하기
                    </button>
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageBox}>
                      <input
                        type="file"
                        id="fileInput2"
                        className={styles.fileInput}
                        accept="image/*"
                        data-img-id="uploadedImage2"
                        onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="fileInput2"
                        className={styles.uploadLabel}
                      >
                        <img
                          id="uploadedImage2"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b081060d0b2534286f91e3d52cbdf66ea1b1727de5d262279032fe689140e403?placeholderIfAbsent=true&apiKey=2c74e1f044004ecdb4b1b37cd6be4010"
                          className={styles.uploadIcon}
                          alt="Upload icon"
                        />
                        <p className={styles.uploadText}>
                          {fileNames.fileInput2}
                        </p>
                      </label>
                    </div>
                    <input
                      type="text"
                      className={styles.titleInput}
                      placeholder="제목을 입력하세요"
                      value={title2}
                      onChange={(e) => setTitle2(e.target.value)}
                    />
                    <textarea
                      className={styles.bodyInput}
                      placeholder="본문을 입력하세요"
                      value={body2}
                      onChange={(e) => setBody2(e.target.value)}
                    ></textarea>

                    <input
                      type="date"
                      className={styles.dateInput}
                      value={dateInput2}
                      onChange={(e) => setDateInput2(e.target.value)}
                    />

                    <input
                      type="time"
                      className={styles.timeInput}
                      value={timeInput2}
                      onChange={(e) => setTimeInput2(e.target.value)}
                    />

                    <button
                      className={styles.registrationBtn}
                      onClick={handleReservation}
                    >
                      예약하기
                    </button>
                  </div>
                  <div className={styles.imageWrapper}>
                    <div className={styles.imageBox}>
                      <input
                        type="file"
                        id="fileInput3"
                        className={styles.fileInput}
                        accept="image/*"
                        data-img-id="uploadedImage3"
                        onChange={handleImageUpload}
                      />
                      <label
                        htmlFor="fileInput3"
                        className={styles.uploadLabel}
                      >
                        <img
                          id="uploadedImage3"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b081060d0b2534286f91e3d52cbdf66ea1b1727de5d262279032fe689140e403?placeholderIfAbsent=true&apiKey=2c74e1f044004ecdb4b1b37cd6be4010"
                          className={styles.uploadIcon}
                          alt="Upload icon"
                        />
                        <p className={styles.uploadText}>
                          {fileNames.fileInput3}
                        </p>
                      </label>
                    </div>
                    <input
                      type="text"
                      className={styles.titleInput}
                      placeholder="제목을 입력하세요"
                      value={title3}
                      onChange={(e) => setTitle3(e.target.value)}
                    />
                    <textarea
                      className={styles.bodyInput}
                      placeholder="본문을 입력하세요"
                      value={body3}
                      onChange={(e) => setBody3(e.target.value)}
                    ></textarea>

                    <input
                      type="date"
                      className={styles.dateInput}
                      value={dateInput3}
                      onChange={(e) => setDateInput3(e.target.value)}
                    />
                    <input
                      type="time"
                      className={styles.timeInput}
                      value={timeInput3}
                      onChange={(e) => setTimeInput3(e.target.value)}
                    />
                    <button
                      className={styles.registrationBtn}
                      onClick={handleReservation}
                    >
                      예약하기
                    </button>
                  </div>
                </>
              )}

              {selectedMenu === "상품 발송내역" && (
                <div className={styles.container}>
                  <h2 className={styles.title}>상품 발송 내역</h2>
                  <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th>번호</th>
                          <th>제목</th>
                          <th>내용</th>
                          <th>업로드 이미지 이름</th>
                          <th>발송 날짜</th>
                          <th>발송 여부</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>상품 A</td>
                          <td>상품 A의 상세 설명입니다.</td>
                          <td>상품A_이미지.jpg</td>
                          <td>2024-08-17 12:23:00</td>
                          <td>발송 완료</td>
                        </tr>
                        {/* 추가적인 행을 여기에 삽입할 수 있습니다 */}
                        <tr>
                          <td>2</td>
                          <td>상품 A</td>
                          <td>상품 A의 상세 설명입니다.</td>
                          <td>상품A_이미지.jpg</td>
                          <td>2024-08-17 12:23:00</td>
                          <td>발송 대기중</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedMenu === "구독 서비스 신청" && (
                <div className={styles.subscriptionWrapper}>
                  <h2 className={styles.subscriptionTitle}>
                    도매업자를 위한 클라우드 메세지 서비스 안내
                  </h2>
                  <p className={styles.subscriptionDescription}>
                    클라우드 메세지 서비스를 통해 귀하의 가게를 구독하면,
                    고객들에게 새로운 상품 정보와 특별 프로모션을 효과적으로
                    전달할 수 있습니다. 구독을 통해 상품 알림과 홍보 기능을
                    이용하여 고객과의 소통을 강화하고, 매출을 증대시켜 보세요.
                  </p>
                  <h3 className={styles.subheading}>서비스 내용</h3>
                  <ul className={styles.benefitsList}>
                    <li>고객에게 실시간 상품 알림 발송</li>
                    <li>특정 상품 또는 프로모션에 대한 맞춤형 홍보</li>
                    <li>고객 재방문 유도를 위한 효과적인 마케팅 도구</li>
                  </ul>
                  <h3 className={styles.subheading}>주의사항</h3>
                  <ul className={styles.noticeList}>
                    <li>구독 신청 후, 초기 설정이 필요합니다.</li>
                    <li>
                      추가 비용이 발생할 수 있으며, 자세한 사항은 고객센터를
                      통해 확인해 주세요.
                    </li>
                    <li>서비스 기능은 사전 공지 없이 변경될 수 있습니다.</li>
                  </ul>
                  <h3 className={styles.subheading}>동의 사항</h3>
                  <p className={styles.agreementText}>
                    본 서비스에 가입함으로써 다음 사항에 동의하게 됩니다:
                  </p>
                  <ul className={styles.agreementList}>
                    <li>서비스 이용 약관에 동의합니다.</li>
                    <li>개인정보 처리방침을 확인하고 동의합니다.</li>
                    <li>
                      서비스 관련 중요 사항을 이메일로 수신하는 것에 동의합니다.
                    </li>
                  </ul>
                  <button
                    onClick={subscribeFcmService}
                    className={styles.subscriptionButton}
                  >
                    구독 신청하기
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Firebase;
