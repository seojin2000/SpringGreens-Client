import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState('map');
  const [navigateToLogin, setNavigateToLogin] = useState(false);

  const handleClick = (iconName) => {
    if (iconName === 'user') {
      setActiveIcon(iconName);
      setNavigateToLogin(true);
    } else {
      setActiveIcon(iconName);
      setNavigateToLogin(false);
    }
  };

  useEffect(() => {
    if (navigateToLogin) {
      router.push('/loginPage');
    }
  }, [navigateToLogin, router]);


  return (
    <nav className="navbar">
      <ul className="navLinks">
        <li>
          <Link href="" onClick={() => handleClick('map')}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 24L9.91 15.4C8.91318 14.2231 8.27124 12.7872 8.05896 11.2595C7.84667 9.73183 8.07276 8.17529 8.71091 6.77115C9.34906 5.36702 10.373 4.17308 11.6635 3.32839C12.9539 2.4837 14.4578 2.02302 16 2C18.1377 2.02113 20.18 2.88859 21.6794 4.41241C23.1789 5.93623 24.0133 7.99219 24 10.13C24.0008 11.9949 23.3659 13.8044 22.2 15.26L16 24ZM16 4C14.3919 4.01847 12.8568 4.67438 11.7318 5.82371C10.6069 6.97303 9.984 8.52183 10 10.13C10.0076 11.5977 10.5355 13.0151 11.49 14.13L16 20.52L20.63 14C21.5101 12.9014 21.9929 11.5376 22 10.13C22.016 8.52183 21.3931 6.97303 20.2682 5.82371C19.1432 4.67438 17.6081 4.01847 16 4Z"
                fill={activeIcon === 'map' ? '#304FFE' : '#A2A2A2'}
              />
              <path
                d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z"
                fill={activeIcon === 'map' ? '#304FFE' : '#A2A2A2'}
              />
              <path
                d="M28 12H26V14H28V28H4V14H6V12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V14C30 13.4696 29.7893 12.9609 29.4142 12.5858C29.0391 12.2107 28.5304 12 28 12Z"
                fill={activeIcon === 'map' ? '#304FFE' : '#A2A2A2'}
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link href="/" onClick={() => handleClick('home')}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 26.6667C28 27.0203 27.8595 27.3594 27.6095 27.6095C27.3594 27.8595 27.0203 28 26.6667 28H5.33333C4.97971 28 4.64057 27.8595 4.39052 27.6095C4.14048 27.3594 4 27.0203 4 26.6667V12.6533C3.99986 12.4502 4.04616 12.2496 4.13535 12.0671C4.22455 11.8845 4.35429 11.7248 4.51467 11.6L15.1813 3.30267C15.4154 3.12059 15.7035 3.02174 16 3.02174C16.2965 3.02174 16.5846 3.12059 16.8187 3.30267L27.4853 11.6C27.6457 11.7248 27.7754 11.8845 27.8646 12.0671C27.9538 12.2496 28.0001 12.4502 28 12.6533V26.6667ZM25.3333 25.3333V13.304L16 6.04533L6.66667 13.304V25.3333H25.3333Z"
                fill={activeIcon === 'home' ? '#304FFE' : '#A2A2A2'}
              />
              <line
                x1="13.3333"
                y1="23.5"
                x2="18.6667"
                y2="23.5"
                stroke={activeIcon === 'home' ? '#304FFE' : '#A2A2A2'}
                strokeWidth="2"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link href="/" onClick={() => handleClick('heart')}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7399 25.9672L14.7384 25.9659C11.2854 22.8347 8.49989 20.3032 6.56593 17.9371C4.64296 15.5845 3.66667 13.5179 3.66667 11.3333C3.66667 7.76681 6.44443 5 10 5C12.0177 5 13.9708 5.94446 15.2412 7.42462L16 8.30876L16.7588 7.42462C18.0292 5.94446 19.9823 5 22 5C25.5556 5 28.3333 7.76681 28.3333 11.3333C28.3333 13.5179 27.357 15.5845 25.4341 17.9371C23.5001 20.3032 20.7146 22.8347 17.2616 25.9659L17.2602 25.9672L16 27.1144L14.7399 25.9672Z"
                stroke={activeIcon === 'heart' ? '#FF4081' : '#A2A2A2'}
                strokeWidth="2"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link href="/" onClick={() => handleClick('user')}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.865 26.5C26.9613 23.2088 24.0275 20.8488 20.6038 19.73C22.2973 18.7218 23.6131 17.1856 24.349 15.3572C25.085 13.5289 25.2004 11.5095 24.6776 9.6092C24.1548 7.70889 23.0226 6.03274 21.455 4.83816C19.8873 3.64357 17.9709 2.9966 16 2.9966C14.0291 2.9966 12.1127 3.64357 10.545 4.83816C8.9774 6.03274 7.84525 7.70889 7.32243 9.6092C6.79961 11.5095 6.91504 13.5289 7.65099 15.3572C8.38694 17.1856 9.70271 18.7218 11.3963 19.73C7.9725 20.8475 5.03875 23.2075 3.135 26.5C3.06519 26.6138 3.01888 26.7405 2.99881 26.8725C2.97875 27.0045 2.98532 27.1392 3.01816 27.2687C3.05099 27.3981 3.10942 27.5197 3.18999 27.6262C3.27056 27.7327 3.37165 27.8219 3.48728 27.8887C3.60292 27.9555 3.73076 27.9985 3.86326 28.0151C3.99577 28.0316 4.13025 28.0215 4.25878 27.9853C4.38731 27.9491 4.50728 27.8875 4.61161 27.8041C4.71595 27.7208 4.80253 27.6174 4.86625 27.5C7.22125 23.43 11.3838 21 16 21C20.6163 21 24.7788 23.43 27.1338 27.5C27.1975 27.6174 27.2841 27.7208 27.3884 27.8041C27.4927 27.8875 27.6127 27.9491 27.7412 27.9853C27.8698 28.0215 28.0042 28.0316 28.1367 28.0151C28.2692 27.9985 28.3971 27.9555 28.5127 27.8887C28.6284 27.8219 28.7294 27.7327 28.81 27.6262C28.8906 27.5197 28.949 27.3981 28.9818 27.2687C29.0147 27.1392 29.0213 27.0045 29.0012 26.8725C28.9811 26.7405 28.9348 26.6138 28.865 26.5ZM9 12C9 10.6155 9.41054 9.26215 10.1797 8.11101C10.9489 6.95987 12.0421 6.06266 13.3212 5.53284C14.6003 5.00303 16.0078 4.86441 17.3656 5.1345C18.7235 5.4046 19.9708 6.07129 20.9497 7.05025C21.9287 8.02922 22.5954 9.2765 22.8655 10.6344C23.1356 11.9922 22.997 13.3997 22.4672 14.6788C21.9373 15.9579 21.0401 17.0511 19.889 17.8203C18.7378 18.5895 17.3845 19 16 19C14.1441 18.998 12.3648 18.2599 11.0524 16.9476C9.74012 15.6352 9.00199 13.8559 9 12Z"
                fill={activeIcon === 'user' ? '#304FFE' : '#A2A2A2'}
              />
            </svg>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #ddd;
        }

        .navLinks {
          display: flex;
          list-style: none;
          justify-content: space-between;
          width: 100%;
          max-width: 400px;
          margin: 0;
          padding: 0;
        }

        .navLinks li {
          margin-left: 1rem;
        }

        .navLinks a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        .navLinks a svg {
          transition: fill 0.3s ease, stroke 0.3s ease;
        }

        .navLinks a:hover svg {
          fill: #007bff;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

