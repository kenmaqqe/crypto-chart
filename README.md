# Crypto Chart

Real-time **Bitcoin** price chart using WebSocket from Binance, built with **Next.js**, **React**, **Recharts**, and **Framer Motion**.
Includes a preloader animation while data is loading.

---

## 🚀 Features

- Real-time BTC (Bitcoin) price chart
- Shows only the last 30 data points for smooth rendering
- Animated preloader with Framer Motion
- Connected to Binance WebSocket API
- Dark-themed UI with highlighted axes and chart line

---

## 🛠 Technologies

- [Next.js 13](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Recharts](https://recharts.org/) for charts
- [Framer Motion](https://www.framer.com/motion/) for preloader animation
- [TypeScript](https://www.typescriptlang.org/)

---

## 💻 Local Setup

1. Clone the repository:

```bash
git clone https://github.com/kenmaqqe/crypto-chart.git
cd crypto-chart
```

2. Install dependencies:

```bash
yarn install
# or npm install / yarn install
```

3. Run the project locally:

```bash
yarn dev
# open http://localhost:3000
```

---

## 📂 Project Structure

```
crypto-chart/
├── app/
│   ├── page.tsx           # Main page with chart and preloader
│   └── components/
│       ├── Chart.tsx      # Chart component
│       └── Preloader.tsx  # Animated preloader
├── utils/
│   └── fetchData.ts       # WebSocket logic for BTC
├── package.json
└── tsconfig.json
```

---

## 🔗 Deployment on Vercel

The project is ready to deploy on **Vercel**.
[Open Demo](https://crypto-chart.vercel.app)

---

## 📝 License

MIT License © 2025
