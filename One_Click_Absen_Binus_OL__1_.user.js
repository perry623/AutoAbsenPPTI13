// ==UserScript==
// @name         One Click Absen Binus OL
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Kenapa ol.binus tidak ada button can not tapping all, maka dari itu mari kita buat
// @author       Perry & Jason & Galang & Jolee
// @match        https://ol.binus.ac.id/Attendance/StudentList
// @icon         https://yt3.ggpht.com/LGmAQokozfl19KjoitSu4XlY6w0OGiFjUu4jkiveHJayfOSlMbs1YLbpT3arbFmRmQeyz-_lzs4=s68-c-k-c0x00ffffff-no-rj
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let TapButton = document.createElement("button");

    TapButton.innerHTML += `Hadir Semua`;
    // Adding toggle script button to after the login/logout button

    TapButton.style=`

      z-index: 1000 !important;
      align-items: center;
      background-clip: padding-box;
      background-color: #fa6400;
      border: 1px solid transparent;
      border-radius: .25rem;
      box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-flex;
      font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      line-height: 1.25;
      margin: 0;
      min-height: 3rem;
      padding: calc(.875rem - 1px) calc(1.5rem - 1px);
      position: fixed;
      text-decoration: none;
      transition: all 250ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: baseline;
      width: auto;
      top: 50%;
      right: 0;
        `
// //  pindahin bawah
    var remark= document.getElementById('MainContent_rptStudentList_chkCheckAll');
    remark.style.display= "none";

    TapButton.addEventListener('click', ()=>{
        if (remark.checked == false) remark.click();

        setTimeout(() => {
            var studentCount = 35
            for( let i = 0; i< studentCount;i++){
                document.getElementById('MainContent_rptStudentList_ddlRemark_'+i).value='2';
            }
            setTimeout(() =>{
                remark.click();
            },100)

            setTimeout(() =>{
                remark.click();
            },400)

        }, 800)


        


        console.log("Done")
        TapButton.disabled = `true`;
        TapButton.innerHTML = `Done`;
         TapButton.style=`

          z-index: 1000 !important;
          align-items: center;
          background-clip: padding-box;
          background-color: green;
          border: 1px solid transparent;
          border-radius: .25rem;
          box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
          box-sizing: border-box;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
          font-size: 16px;
          font-weight: 600;
          justify-content: center;
          line-height: 1.25;
          margin: 0;
          min-height: 3rem;
          padding: calc(.875rem - 1px) calc(1.5rem - 1px);
          position: fixed;
          text-decoration: none;
          transition: all 250ms;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
          vertical-align: baseline;
          width: auto;
          top: 50%;
          right: 0;
            `
    })




    document.body.appendChild(TapButton);


})();