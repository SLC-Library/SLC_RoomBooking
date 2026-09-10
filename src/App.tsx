import React from 'react';

// 1. ฟังก์ชันส่งอีเมลแจ้งเตือนไปยัง Apps Script
const triggerEmailNotification = async (bookingData: any) => {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzbfQ5UuP1hKHpwtGSUrvWArvkFY4tgoHVCBaoFZr5EAEtolbejhLz2CYQuBjodSRug/exec";

  try {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    console.log("ส่งข้อมูลแจ้งเตือนไปยัง Apps Script เรียบร้อย");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

export default function App() {
  // 2. ตัวอย่างฟังก์ชันสำหรับเรียกใช้เมื่อผู้ใช้กด Submit ฟอร์มจองห้อง
  const handleBookingSubmit = async (formData: any) => {
    try {
      // TODO: บันทึกลง Firebase (Firestore/Realtime Database)
      // await addDoc(collection(db, "bookings"), formData);

      // เรียกใช้งานส่งอีเมลแจ้งเตือน
      triggerEmailNotification(formData);

      alert("ส่งข้อมูลการจองเรียบร้อยแล้ว");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ระบบจองห้องประชุม SLC Library</h1>
      {/* วาง Component ฟอร์มจองห้องของคุณตรงนี้ */}
    </div>
  );
}
