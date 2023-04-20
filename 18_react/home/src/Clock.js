function Clock() {
  return (
    <div className="clock-container">
      {/* toLocaleTimeString(): 현재 사용자의 문화권에 맞는 시간을 표기해줌 */}
      <h1>현재시간은 {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

// export function Clock2() {
//   return (
//     <div className="clock-container">
//       {/* toLocaleTimeString(): 현재 사용자의 문화권에 맞는 시간을 표기해줌 */}
//       <h1>현재시간은 {new Date().toLocaleTimeString()}</h1>
//     </div>
//   );
// }

export default Clock;

// export default=>뒤에 있는 Clock을 외부로 보내줌
