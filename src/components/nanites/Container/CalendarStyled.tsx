import styled from "styled-components";
import { dark, lightGreen } from "../../../assets/color";

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
    color: ${dark};
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  .rbc-month-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .rbc-row-content {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .rbc-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  .rbc-date-cell.rbc-off-range {
    opacity: 0;
  }

  .rbc-date-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    alignSelf: strech;
    width: 14.1%;
  }

  .rbc-button-link {
    background: transparent;
    border: none;
    font-family: Poppins;
  }
  
  .rbc-selected {
    background-color: ${dark} !important;
  }

  .rbc-event {
    background-color: ${lightGreen};
  }
`

export default CalendarStyled