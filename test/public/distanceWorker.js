self.onmessage = function(e) {
  // distanceWorker 를 통해서 여기로 오게 되고
  // 그러면 데이터를 받아서 caculateDistance를 호출한다.
  const { lat1, lon1, lat2, lon2 } = e.data;
  const distance = calculateDistance(lat1, lon1, Number(lat2), Number(lon2));
  // 계산한 값을 가지고, 메인 스레드로 전송
  self.postMessage(distance);
};

function calculateDistance(lat1, lon1, lat2, lon2) {

  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
  
}