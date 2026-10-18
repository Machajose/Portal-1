// Fake data for the demo. Change anything here and the whole app updates.
export const student = {
  name: "JANE SAMPLE DOE",
  firstName: "JANE",
  regNo: "xx000/0000/2023",
  semester: "SEMESTER 1 2026/2027",
  stage: "Y4S1",
  programCode: "XX000",
  programmeName: "BACHELOR OF SCIENCE (SAMPLE PROGRAMME)",
  campus: "MAIN",
  idNumber: "00000000",
  gender: "Female",
  dob: "01/01/05",
  phone: "0700000000",
  email: "jane.doe@example.com",
};

export const fees = {
  billed: 500000,
  paid: 250000,
  balance: 250000,
  paidChange: 50.0,
  balanceChange: -5.0,
};

export const menuItems = [
  { label: "Dashboard", page: "dashboard" },
  { label: "Finances", page: "finances", dropdown: true },
  { label: "Academics", page: "academics", dropdown: true },
  { label: "Student Requests", page: "requests", dropdown: true },
  { label: "Hostel Booking", page: "hostel", dropdown: true },
  { label: "Account", page: "profile", dropdown: true, icon: "👤" },
];
