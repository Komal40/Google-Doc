
import React, { useEffect, useState } from 'react';
import style from './Title.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {BiVideo} from 'react-icons/bi'
import {BiCommentDetail} from 'react-icons/bi'

export default function Title() {
  const [text, setText] = useState('Untitled Document');

  async function handleSaveDocument(myDiv) {
    const sheetContent = document.getElementById(myDiv);
    const canvas = await html2canvas(sheetContent);
    const imageData = canvas.toDataURL('image/png');
    const pdfDoc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: false,
    });
  
    pdfDoc.addImage(imageData, 'PNG', 0, 0, 210, 297, '', 'FAST');
  
    const textContent = sheetContent.textContent || '';
    const lines = pdfDoc.splitTextToSize(textContent, 180);
    pdfDoc.text(lines, 15, 15);
  
    pdfDoc.save(`myDiv.pdf`);
  }
  

  return (
    <div className={style.container}>
      <span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUmhPz///8AZtoSfvyjxP0YgPyEs/0Ae/wAefzd6v75/P/j7v/0+f/L3v4mhf0AZNju9Pxmov3S4f7A1/6Ltv2uy/7T4/6Uu/11qv220P670/7I3P58rfsAYdeewf1Wmvzvbmb5AAADBUlEQVR4nO3d227aQBCAYcziYAyUcjBxkqZ5/7csFSi9aKTMrmeZGfT/1wjvp1llzUmZNY/ezHoB1UMYP4TxQxg/hP91Hp6fKvTrZw3d3/KEqzEtU1ujNK9FzBFu9l07q9X7rhIxQ3hI9Xyz2e690hTlwmNX0XcRzisRxcJDXeBFWIkoFfY1d+hNWIcoFY7pDsIqRKFwXXmP3oQ1iELhqfYIb8IKRKGwtu9TqE+UCetv0k/hXPvolwmP1TfpP6H2FGXC4Z5CZaJMuLirUJfoUqhK9CnUJDoVKhK9CvWIboVqRL9CraPfsVBpip6FOlN0LVSZom+hBtG5UIHoXTid6F44mehfOJUYQDjx0IggnDbFEMJJU4whnDLFIMIJxCjCcmIYYTExjrCUGEhYSIwkLCOGEhYRYwlLjv5gwoIpRhPmE8MJs4nxhLnEgMJMYkRhHjGkMIsYU5hDDCrMOPqjCuVTdCPMBM7nOyHRjfBHdul3LGF+aYEQIULrECJEaB9ChAjtQ4gQoX0IESK0DyFChPYh1BWmTr9vr3lPYdo2vXbN9ruL3lO4PIieJq/DEqHoaRBeQ4iwKIQIbyG8hjC9rPR78XTXNktL/VzdeZuEECFC+xAiRGgfQoQI7UOoK3z4V0/pda3fq6dXwI//LgbCohAivIXwGkKERSG8713bW7/Rrn/zdNf2+N8YMgkhQoT2IUSI0D6ECBHah1BX2E75gCKCsF0ctsWdPwIIp72LsS/7D6AIESJEiBAhQoQIM4UmIUSI0D6ECBHahxAhQvsQIkRoH0KECO1DiBChfQgRIrQPIUKE9iFEiNA+hAgR2ocQIUL7VIWDS+GgKDy6FB4VhevOmvNF3VpR2Fhrvky4dNnDTv62aTqpCh1uT+EmlQqb0dsQ0yhcuVTYl33bvF5tryxszr72aXeWLlwsbI6eiJ3sLMwTNtvkZae2KeP3HRnCZrPvPBjbbr/JWHWOsGlWY1qm1rLL9cdV1przhJfOw/OTXc+D+C9MsTBcCOOHMH4I44cwfn8A3eysPaJ7bhwAAAAASUVORK5CYII="
          alt="Doc"
        />
      </span>
      <span>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder="Untitled Doc"
          defaultValue={text}
        />
      </span>
      <AiOutlineStar className={style.star} />
      <button onClick={() => handleSaveDocument('myDiv')} className={style.star} >Save</button>
      <div className={style.right}>
      <BiVideo/>
      {/* <BiCommentDetail/> */}
      </div>
    </div>
  );
}


