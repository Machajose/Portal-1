// Sample student record and values matching the MUT portal reference screen.
export const student = {
  name: "JOSEPH MACHARIA WANJAU",
  firstName: "JOSEPH",
  regNo: "SCT/0000/2023",
  semester: "SEMESTER 1 2026/2027",
  stage: "Y1S1",
  programCode: "BBIT",
  programmeName: "BACHELOR OF BUSINESS INFORMATION TECHNOLOGY",
  campus: "MAIN CAMPUS",
  idNumber: "00000000",
  gender: "Male",
  dob: "01/01/05",
  phone: "0700000000",
  email: "joseph@example.com",
};

export const fees = {
  billed: 175000,
  paid: 86100,
  balance: 8890.03,
  paidChange: 49.16,
  balanceChange: -5.06,
};

export const menuItems = [
  { label: "Dashboard", page: "dashboard" },
  { label: "Finances", page: "finances", dropdown: true },
  { label: "Academics", page: "academics", dropdown: true },
  { label: "Student Requests", page: "requests", dropdown: true },
  { label: "Hostel Booking", page: "hostel", dropdown: true },
  { label: "Account", page: "profile", dropdown: true, icon: "👤" },
];
