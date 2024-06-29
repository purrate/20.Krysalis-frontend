# InspTrack
Digital Inspection Management System
To implement digital data capturing for in-process inspection, we will utilize a tablet to record and manage data. The following outlines the approach, process, and reports for the implementation:

### Scope:
- **Digital Data Capturing:** Eliminate manual writing for inspections
  - First-off-sample inspection
  - In-process inspection
  - Last-off-sample inspection

### Inspection Types:
1. **First Sample Inspection:** Occurs after a process changeover on any machine.
2. **In-Process Inspection:** Conducted every hour during an 8-hour shift on any machine.
3. **Last Sample Inspection:** Performed at the end of the batch quantity process on the machine.

### Process:
- **Machine:** Information about the machine being used.
- **Operator:** The operator handling the machine.
- **Material Details:** Includes part number and name.
- **Process SOP:** Standard operating procedures for the process.
  - **Parameters to check the output part from the process happening in the machine.**

### Process SOP Format:
- **Part No:**
- **Part Name:**
- **Machine No:**
- **Machine Name:**
- **Drawing Issue No:**
- **Operation No:**
- **Operation Name:**
- **Material Details:**
- **Checking Parameters List:** (Inspection Checklist)

### Process Video:
- **In-Process Inspection Sheet Format:**

### Approach to Capture Data Digitally:
**Instrument:** Tablet

1. **Dashboard:** Display today’s running machine list.
2. **Inspector Code:** Scan inspector code first.
3. **Machine Selection:** Inspector selects the machine (via Bar or QR code).
4. **Operator Scan:** Scan the operator’s Bar or QR code.
5. **Process SOP Scan:** Scan the Process SOP (via Bar or QR code).
6. **Record Data:** Inspector records actual dimensions against process parameters (prefixed Bar or QR code).

### Reports to be Created:
1. **Hourly In-Process Inspection Completion Status:** Dashboard view.
2. **Shift End Production Report:** Compare target vs. actual production.
3. **Material Route Card Status:** Track material movement.
4. **FG Moved Quantity Report:** Record finished goods movement.
5. **OEE Report:** Overall Equipment Effectiveness.
6. **Operator Performance Report:** Track operator efficiency and performance.
7. **Daily Rejection Report:** Record daily rejected parts.
8. **SPC – Run Chart (Live):** Statistical Process Control chart.

### Implementation Steps:
1. **Setup Tablets:** Ensure tablets are equipped with scanning capabilities (Bar or QR code).
2. **Dashboard Development:** Create a dashboard to display real-time data.
3. **Integration:** Link tablets with the central database to capture and store inspection data.
4. **Training:** Train inspectors on how to use the tablets and the scanning process.
5. **Testing:** Conduct a pilot test to ensure the system works as intended.
6. **Go Live:** Implement the system across all inspection points.

By following this approach, we can streamline the inspection process, reduce manual errors, and provide real-time data for analysis and decision-making.

