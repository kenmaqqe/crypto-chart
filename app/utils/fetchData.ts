import type { ChartPoint } from "../components";

export function subscribeToBTC(onData: (data: ChartPoint) => void) {
  const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const newPrice = parseFloat(message.p);

    const data: ChartPoint = {
      time: new Date().toLocaleTimeString(),
      price: newPrice,
    };

    onData(data);
  };

  return () => ws.close();
}
