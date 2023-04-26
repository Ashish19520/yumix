import React, { useState } from 'react'
//@ts-ignore
import { InlineWidget, PopupWidget,PopupModal } from "react-calendly";


type CalenderProps = {
  open: boolean,
  setClose: () => void,
}

const Calender = (props:CalenderProps) => {

  // const pageSettings={{
  //   backgroundColor: 'ffffff',
  //   hideEventTypeDetails: false,
  //   hideLandingPageDetails: false,
  //   primaryColor: '00a2ff',
  //   textColor: '4d5055'
  // }}


  return (
    <div>
         {/* <InlineWidget url="https://calendly.com/kishanpal-saini" /> */}

      {/* <PopupWidget
        url="https://calendly.com/kishanpal-saini"
        // @ts-ignore
        rootElement={document.getElementById("calender")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      /> */}

{/* <button
          style={{ display: "block", margin: "0 auto" }}
          onClick={() => setOpenCalender(true)}
        >
          Custom Button
        </button> */}
        <PopupModal
          url="https://calendly.com/vishal-agarwal-1/15min"
          // pageSettings={this.props.pageSettings}
          // utm={this.props.utm}
          // prefill={this.props.prefill}
          onModalClose={props.setClose}
          open={props.open}
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
        // @ts-ignore
          rootElement={document.getElementById("root")}
        />
    </div>
  )
}

export default Calender