# react-shift-swap

## Overview

Shift-Swap is a web application designed to help employees easily trade, post, and manage shifts within a business. The app features a bulletin-board-style interface where draft shifts, unclaimed shifts, claimed shifts, and approvals are clearly organized. Employees can create draft posts with shift details and their employee code, claim available shifts, and track shift activity. Managers can approve or deny claimed shifts, and the system maintains a full record of all transactions along with monthly statistics for each employee.

## Setup

Ensure you have the latest version of Node.js installed.

Clone the repository to your local machine:
```
git clone <repository-url>
```

Navigate to the project folder and install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

Open your browser and go to http://localhost:3000 to use the application.
## Feature List
1. **Draft Post Creation**

- Employees can create shift requests.

- Input fields: day, start time, end time, employee code.

- Managers can mark posts as open shifts available to anyone.

<img width="1890" height="438" alt="Screenshot 2025-08-13 203148" src="https://github.com/user-attachments/assets/3041868d-bb15-48f8-906d-2cc7df399bd9" />


2. **Unclaimed Shifts**

- Newly posted shifts appear in the unclaimed section.

- Displays the owner of the shift.

- Allows the creator or a manager to remove the post.

- Validates employee codes and permissions before claiming.

<img width="1889" height="441" alt="Screenshot 2025-08-13 203217" src="https://github.com/user-attachments/assets/a81a2a55-9a01-4090-bb95-eaaa053762b3" />


3. **Claiming Shifts**

- Employees can claim available shifts.

- Claimed shifts move to the claimed section.

<img width="1892" height="300" alt="Screenshot 2025-08-13 203239" src="https://github.com/user-attachments/assets/a2ec2b23-9ea1-41bd-9559-26aae64edd6a" />


4. **Manager Approval Workflow**

- Managers approve or deny claimed shifts by entering their code.

- Approval or denial moves the post to the approval section with a final verdict.

<img width="1887" height="232" alt="Screenshot 2025-08-13 203303" src="https://github.com/user-attachments/assets/9541f49e-8177-4bd6-a915-8b1b34995000" />


5. **Notifications & Validation**

- Alerts users if an employee code does not exist or lacks permission.

<img width="431" height="130" alt="Screenshot 2025-08-13 203843" src="https://github.com/user-attachments/assets/0726c497-7e69-411b-95a0-2b13b2675783" />


6. **Employee Statistics**

- Tracks all shift-related transactions.

- Shows number of shifts claimed or posted by month.

- Dropdown to select which employee’s statistics to display.

<img width="1888" height="858" alt="Screenshot 2025-08-13 203327" src="https://github.com/user-attachments/assets/a5ef5dc1-bc33-48f6-9b71-6220d78fe642" />


7. **User Interface**

- Bulletin board style layout with posts displayed side by side.

- Clear separation of Draft, Unclaimed, Claimed, and Approval sections.

<img width="657" height="885" alt="Screenshot 2025-08-13 203742" src="https://github.com/user-attachments/assets/e38c4f36-7696-4983-a3e3-d4e8e42a0209" />


## Technology Stack
```
Next.js (React)  
 ├─ TypeScript
 ├─ MUI Components & Themes
 │    ├─ Buttons, Grid, TextField, etc.
 │    └─ ThemeProvider + Custom Theme
 └─ Optional Utilities
      ├─ Dayjs (date handling)
      └─ ESLint / Prettier
```
## Demo


https://github.com/user-attachments/assets/68a8bd86-cdb4-49c6-954e-584e64b35165



## Future Development
1. Persistent Data

   To enable real-time updates and cross-device communication, the application will include server-side persistent data. This ensures that all posts, claims, and approvals are synchronized and accessible from any device.

2. Admin Console

   Since employees frequently join or leave a company, an admin console is planned to allow authorized personnel to safely add, edit, or remove employee information and manage permissions.

## Contact Info

For questions or feedback regarding this project, feel free to reach out:

**Name:** Lucas Polanco

**Email:** lucaspolanc0@vt.edu

