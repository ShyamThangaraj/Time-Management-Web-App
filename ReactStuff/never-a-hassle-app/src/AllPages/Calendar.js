import userEvent from '@testing-library/user-event';
import { useRef, useState } from 'react';
import './Never-a-hassle-styles.css';

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

export default function Calendar() {
    const TimeRef = useRef();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [ShowDatePopUp, setShowDatePopUp] = useState(false);

    const GetDatesInMonth = (year, month) => { 
        let NumDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let days = Array(42).fill(0);
        let currentDate = new Date(year, month, 1);
        let first_day = currentDate.getDay();
        let days_2d = [];
        let weeks = 6;
        let weekdays = 7;

        if(currentDate.getFullYear()%4 == 0){
            NumDays[1] = 29;
        }
        else{
            NumDays[1] = 28;
        }
        let dayIndex = 0;
        while (currentDate.getFullYear() === year && currentDate.getMonth() === month){
            dayIndex = (first_day-1) + currentDate.getDate();
            days[dayIndex] = currentDate.getDate();
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        let firstIndex = null;
        for(let i=0; i<days.length; i++){
            if(days[i]==1){
                firstIndex = i;
            }

        }
        
        for (let i = 0; i < first_day; i++) { 
            days[i] = "<--";
        }
        for (let i = dayIndex+1; i < 42; i++){
            days[i] = "-->";
        }
        
        /*
        let previousMonth = 0;
        if(month == 0){
            previousMonth = 11;
        }
        else{
            previousMonth = month-1;
        }
        let maxPrevMonth = NumDays[previousMonth];
        for(let i=firstIndex-1; i>=0; i--){
            days[i] = maxPrevMonth;
            maxPrevMonth--;
        }

        let lastIndex = null;
        for(let i=0; i<days.length; i++){
            if(days[i]==0){
                lastIndex = i;
                break;
            }
        }
        let daysInc = 1;
        for(let i=lastIndex; i<days.length; i++){
            if(i%7!=0){
                days[i] = daysInc;
                daysInc++;
            }
            else{
                break;
            }
        }*/
        
        let index = 0;
        for (let i = 0; i < weeks; i++) {
            days_2d[i] = [];
            for (let j = 0; j < weekdays; j++) {
            days_2d[i][j] = days[index];
            index ++;
            }
        }
        return days_2d;
    }

    const checkLastRowForZeros = (twoDArray) => {
        if (!Array.isArray(twoDArray) || twoDArray.length === 0) {
            return false; 
        }
        const lastRow = twoDArray[twoDArray.length - 1]; 
        for (let i = 0; i < lastRow.length; i++) {
            if (lastRow[i] !== "-->") {
                return true;
            }
        }
        return false
    }

    const Day = (props) => { 
        let row = Math.floor((props.index - 1) / 7);
        let col = (props.index - 1) % 7;
        return Calendar[row][col];
    }

    const previousMonth = () => {
        if(month == 0){
        month = 11;
        year--;
        }
        else{
            month--;
        }
        updateMonthName();
        setCalendar(GetDatesInMonth(year, month));
        setShowDatePopUp(false);
    }

    const nextMonth = () => { 
        if(month == 11){
        month = 0;
        year ++;
        }
        else{
            month ++;
        }
        updateMonthName();
        setCalendar(GetDatesInMonth(year, month));
        setShowDatePopUp(false);
    }

    let [CurrentMonthName, setCurrentMonthName] = useState(monthNames[month]);
    const updateMonthName = () => { 
        setCurrentMonthName(monthNames[month]);
    }

    let [Calendar, setCalendar] = useState(GetDatesInMonth(year, month));

    const showLastRow = checkLastRowForZeros(Calendar);

    const [CurrentClickedDay, setCurrentClickedDay] = useState(0);
    function dateClicked(event) { 
        if(event.target.textContent == "-->" || event.target.textContent == "<--"){
            return;
        }
        setCurrentClickedDay(event.target.textContent);
        setShowDatePopUp(true);
        
    }

    function makePopDisappear() { 
        setShowDatePopUp(false);
    }

    return (
        <div>
            <button onClick={previousMonth}>previous</button>
            <button onClick={nextMonth}>next</button>
            <h1>Month: {CurrentMonthName}, Year: {year}</h1>
            <table class="Calendar">
                <tr>  
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                <tr>
                    <td class="Date" onClick={dateClicked}><Day index={1} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={2} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={3} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={4} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={5} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={6} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={7} /></td>
                </tr>
                <tr>
                    <td class="Date" onClick={dateClicked}><Day index={8} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={9} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={10} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={11} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={12} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={13} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={14} /></td>
                </tr>
                <tr>
                    <td class="Date" onClick={dateClicked}><Day index={15} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={16} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={17} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={18} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={19} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={20} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={21} /></td>
                </tr>
                <tr>
                    <td class="Date" onClick={dateClicked}><Day index={22} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={23} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={24} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={25} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={26} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={27} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={28} /></td>
                </tr>
                <tr>
                    <td class="Date" onClick={dateClicked}><Day index={29} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={30} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={31} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={32} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={33} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={34} /></td>
                    <td class="Date" onClick={dateClicked}><Day index={35} /></td>
                </tr>
                {showLastRow && 
                    <tr> 
                        <td class="Date" onClick={dateClicked}><Day index={36} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={37} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={38} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={39} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={40} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={41} /></td>
                        <td class="Date" onClick={dateClicked}><Day index={42} /></td>
                    </tr>
                }
                {ShowDatePopUp &&
                    <div id="DatePopUp">
                        <form class="ReminderPopUp">
                            <h3>Date: {CurrentClickedDay} {monthNames[month]}, {year}</h3>
                            <label>Reminder: <input type="text" name="reminderText" /></label>
                            <br /><br />
                            <label>Time: <input ref={ TimeRef } type="time" name="reminderTime" /></label>
                            <br /><br />
                            <label> Tag Reminder:   
                                <select name="ReminderType">
                                    <option value="Official">Official</option>
                                    <option value="Personal">Personal</option>
                                    <option value="Task">To-Do Task</option>
                                </select>
                            </label>
                            <br /><br />
                            <button onClick={makePopDisappear} type="button">Close</button>
                            <button onClick={makePopDisappear} type="button">Save</button>
                        </form>
                    </div>
                }
            </table>
        </div>
    );
}

