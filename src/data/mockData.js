// Sample student record and values matching the MUT portal reference screen.
export const student = {
  name: "JOSEPH MACHARIA WANJAU",
  firstName: "JOSEPH",
  regNo: "ms200/2535/2023",
  semester: "SEMESTER 1 2026/2027",
  stage: "Y4S1",
  programCode: "MS200",
  programmeName: "BACHELOR OF SCIENCE (MEDICAL LABORATORY SCIENCES)",
  campus: "MAIN",
  idNumber: "42391645",
  gender: "Male",
  dob: "01/12/05",
  phone: "0114655750",
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
