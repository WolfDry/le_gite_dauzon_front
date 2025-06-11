import styled from "styled-components";

const CalendarStyled = styled.div`
  .rbc-calendar {
    display: flex;
    width: 19.4vw;
    overflow: hidden;
    padding: 1.25rem 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  .rbc-month-view {
    display: flex;
    flex-direction: column;
    align-self: stretch;
  }

  .rbc-row.rbc-month-header {
    display: flex;
    overflow: hidden;
    padding: 0rem 0.625rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }

  .rbc-row.rbc-month-header .rbc-header {
    display: flex;
    padding: 0.25rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex: 1 0 0;
  }


  // .rbc-toolbar {
  //   background-color: #f4f4f5;
  //   padding: 12px;
  //   font-weight: bold;
  //   color: #111827;
  // }

  // .rbc-event {
  //   background-color: #6366f1;
  //   border-radius: 8px;
  //   padding: 4px 6px;
  //   font-size: 14px;
  // }

  // .rbc-today {
  //   background-color: #eef2ff !important;
  // }

  // .rbc-selected {
  //   background-color: #4338ca !important;
  // }

  // .rbc-day-bg:hover {
  //   background-color: #f0f0f0;
  //   cursor: pointer;
  // }

  // .rbc-header {
  //   font-size: 0.95rem;
  //   color: #4b5563;
  // }
`

export default CalendarStyled