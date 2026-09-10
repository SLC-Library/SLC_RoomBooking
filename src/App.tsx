import React from 'react';

// ฟังก์ชันส่งอีเมลแจ้งเตือนไปยัง Apps Script (ใช้แบบ GET Parameters)
const triggerEmailNotification = async (bookingData: any) => {
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzbfQ5UuP1hKHpwtGSUrvWArvkFY4tgoHVCBaoFZr5EAEtolbejhLz2CYQuBjodSRug/exec";

  // แปลง Object ข้อมูลการจองเป็น Query Parameters
  const params = new URLSearchParams(bookingData).toString();

  try {
    await fetch(`${WEB_APP_URL}?${params}`, {
      method: "GET",
      mode: "no-cors"
    });
    console.log("ส่งข้อมูลแจ้งเตือนไปยัง Apps Script เรียบร้อย");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

export default function App() {
  // ฟังก์ชันสำหรับเรียกใช้เมื่อผู้ใช้กด Submit ฟอร์มจองห้อง
  const handleBookingSubmit = async (formData: any) => {
    try {
      // 1. บันทึกลง Firebase (ถ้ามี)
      // await addDoc(collection(db, "bookings"), formData);

      // 2. เรียกใช้งานส่งอีเมลแจ้งเตือน
      triggerEmailNotification(formData);

      alert("ส่งข้อมูลการจองเรียบร้อยแล้ว");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ระบบจองห้องประชุม SLC Library</h1>
      {/* วาง Component ฟอร์มจองห้องตรงนี้ */}
    </div>
  );
}
