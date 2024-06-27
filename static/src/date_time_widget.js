/** @odoo-module **/

import { DateTimeField } from "@web/views/fields/datetime/datetime_field";
import {patch} from "@web/core/utils/patch";
const {DateTime} = luxon
import {useState,useEffect} from "@odoo/owl"
patch(DateTimeField.prototype,{
    setup()
    {
        super.setup()
        console.log(this)
        this.calendar = useState({
            'indian': this.setCalendar('indian'),
            'persian': this.setCalendar('persian'),
            'islamic': this.setCalendar('islamic'),
        })
        useEffect(()=>this.setCalenderValue(),()=>[this.state.value])
    },
    setCalendar(calendar,format=DateTime.DATETIME_MED)
    { if(this.state.value)
        {
          return this.state.value.reconfigure({ outputCalendar: calendar }).toLocaleString(format)
        }
    },
    setCalenderValue(format=DateTime.DATETIME_MED)
    {
        this.calendar.indian = this.setCalendar('indian',format)
        this.calendar.persian = this.setCalendar('persian',format)
        this.calendar.islamic = this.setCalendar('islamic',format)
    },
    getFormattedValue(valueIndex) {
        const value = this.values[valueIndex];
        return value
            ? this.field.type === "date"
                ? this.setCalenderValue(DateTime.DATE_FULL)
                : this.setCalenderValue(DateTime.DATETIME_MED)
            : "";
    }

})