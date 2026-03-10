// ไฟล์ adoptme.js

function validateForm(event) {
  // 1. ป้องกันไม่ให้หน้าเว็บรีเฟรชก่อนตรวจสอบเสร็จ
  event.preventDefault();

  let fname = document.getElementById("First_name").value.trim();
  let lname = document.getElementById("Last_name").value.trim();
  let phone = document.getElementById("user_phone").value.trim();
  let pets = document.getElementById("number_of_pets").value;
  let checkbox = document.getElementById("agreement").checked;
    let keep_location = document.querySelector('input[name="keep_location"]:checked');

    if (!keep_location)
    {
        alert("กรุณา กรอกว่าจะเลี้ยงสัตว์เลี้ยงไว้ที่ไหน");
        return false;
    }

  // เงื่อนไขข้อที่ 1: ชื่อ–นามสกุลผู้ติดต่อ และเบอร์ผู้ติดต่อ ห้ามเป็นค่าว่าง
  if (fname === "" || lname === "" || phone === "") {
    alert("กรุณากรอก ชื่อ–นามสกุลผู้ติดต่อ และเบอร์ผู้ติดต่อ");
    return false;
  }

  // เงื่อนไขข้อที่ 2: จำนวนสัตว์เลี้ยงต้องมีค่า และเป็นตัวเลขระหว่าง 0 ถึง 100
  if (pets === "" || isNaN(pets) || pets < 0 || pets > 100) {
    alert(
      "จำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน ต้องระบุเป็นตัวเลข ค่าระหว่าง 0 ถึง 100 เท่านั้น",
    );
    return false;
    }
    


  // เงื่อนไขข้อที่ 4 (ข้อ 3 คือปุ่ม ซึ่งเราทำใน HTML): เช็ค Checkbox
  if (!checkbox) {
    alert(
      "กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข",
    );
    return false;
  }

  // หากผ่านทุกเงื่อนไขด้านบน ให้แสดง Popup แจ้งว่าส่งสำเร็จ (โค้ดเก่าที่เราทำไว้)
  document.getElementById("successPopup").style.display = "block";
}

// ฟังก์ชันสำหรับปิด Popup
function closePopup() {
  document.getElementById("successPopup").style.display = "none";
}
