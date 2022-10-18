import Gallery from "../components/Gallery";

export const TextStyle = {
  variants: {
    // ***********************about page***********
    aboutHeader: {
      as: "h3",
      fontWeight: "400",
      fontSize: "23px",
      color: "#000000",
      fontFamily: "anton",
    },
    aboutbutton: {
      as: "a",
      color: "#FF3606",
      fontWeight: "400",
      fontSize: "23px",
      fontFamily: "anton",
    },
    aboutParagraph: {
      as: "h4",
      fontSize: "15p",
      fontWeight: "400",
      fontFamily: "sen",
    },

    // **********************Home page*****************

    homeHeader1: {
      as: "h1",
      color: " #FFFFFF",
      fontSize: ["45px", "50px", "60px", "70px"],
      fontFamily: "anton",
    },
    homeHeader2: {
      as: "h1",
      color: "#FF4417",
      fontSize: ["50px", "60px", "70px", "100px"],
      fontWeight: "400",
      fontFamily: "Rubik Glitch",
    },

    // ************************destination page****************

    destinationHeader: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["43px", "50px", "80px", "80px"],
      color: "#FFFFFF",
      opacity: "0.19",
      p: ["0", "30", "0", "0"],
      m: "0",
      textTransform: "uppercase",
      fontFamily: "anton",
    },

    destinationHeading1: {
      as: "h3",
      position: "absolute",
      fontFamily: "anton",
      fontSize: ["15px", "15px", "20px", "20px"],
      fontWeight: "400",
      color: "#FFFFFF",
      // textAlign:"center"
      pl: "1",
      m: "0",
      // p:{["31", "31", "0", "0"]}
    },
    destinationHeading2: {
      as: "h2",
      fontSize: ["18px", "20px", "22px", "24px"],
      fontWeight: "400",
      color: "#3E3E3E",
      textAlign: ["center", "center", "center", "start"],
      fontFamily: "anton",
    },
    destinationHeading3: {
      fontSize: ["13px", "19px", "25px", "25px"],
      fontWeight: "400",
      textAlign: "center",
      color: "#3E3E3E",
      p: "40px",
      fontFamily: "anton",
    },
    destinationPerson: {
      as: "h1",
      color: "#FFFFFF",
      fontWeight: "400",
      fontSize: ["10px", "12px", "15px", "15px"],
      fontFamily: "anton",
    },
    destinationDays: {
      as: "h1",
      color: "#FFFFFF",
      fontWeight: "400",
      fontSize: ["10px", "12px", "15px", "15px"],
      fontFamily: "anton",
    },
    destinationPerperson: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["10px", "12px", "15px", "15px"],
      color: "#FF4417",
      fontFamily: "anton",
    },
    destinationStartexploring: {
      fontWeight: "400",
      fontSize: "20px",
      color: "#FF3606",
      alignItems: "center",
      fontFamily: "anton",
      // position:"absolute"
    },
    //  *************************************service page*************
    serviceHeader: {
      as: "h1",
      fontSize: ["20px", "25px", "33px", "33px"],
      fontWeight: "400",
      fontFamily: "anton",
    },

    serviceHeader1: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["45px", "60px", "110px", "124px"],
      letterSpacing: "0.04em",
      color: "#000000",
      opacity: "0.19",
      padding: "0px 20px",
      fontFamily: "anton",
    },
    serviceHeader2: {
      as: "h3",
      fontWeight: "400",
      fontSize: ["10px", "15px", "20px", "30px"],
      letterSpacing: "0.04em",
      color: "#FF3606",
      position: "absolute",
      textAlign: "center",
      fontFamily: "anton",
    },
    serviceParagraph: {
      as: "h4",
      fontSize: ["12px", "12px", "15px", "18px"],
      fontWeight: "400",
      color: "#8B8B8B",
      fontFamily: "anton",
      // p:"10px 0px 20px 0px"
    },

    // ********************Why trekking with us******************

    whytrekkingHeader1: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["35px", "33px", "47px", "60px"],
      color: "#FFFFFF",
      opacity: "0.19",
      m: "0",
      textAlign: ["center", "center", "start", "start"],
      textTransform: "uppercase",
      fontFamily: "anton",
    },
    whytrekkingHeader2: {
      as: "h3",
      position: "absolute",
      fontSize: ["10px", "12px", "13px", "15px"],
      fontWeight: "400",
      color: "#FFFFFF",
      fontFamily: "anton",
      p: "1px  0px 1px 1px",
    },
    whytrekkingHeading: {
      color: "#FFFFFF",
      fontSize: ["10px", "20px", "30px", "30px"],
      fontWeight: "400",
      textAlign: "center",
      fontFamily: "anton",
    },

    // ********************************Gallery page(Journey)**********
    galleryHeader1: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["45px", "60px", "110px", "124px"],
      letterSpacing: "0.04em",
      color: "#000000",
      opacity: "0.19",
      padding: "0px 20px",
      fontFamily: "anton",
    },

    galleryHeader2: {
      as: "h3",
      fontWeight: "400",
      fontSize: ["10px", "15px", "20px", "30px"],
      letterSpacing: "0.04em",
      color: "black",
      position: "absolute",
      textAlign: "center",
      fontFamily: "anton",
    },

    // ********************************Testimonal page**********

    testimonalHeader: {
      fontWeight: "400",
      fontSize: "45px",
      letterpSacing: "0.02em",
      color: "#000000",
      fontFamily: "anton",
    },

    testimonalHeader1: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["43px", "60px", "90px", "100px"],
      color: "#000000",
      opacity: "0.19",
      fontFamily: "anton",
    },
    testimonalHeader2: {
      as: "h3",
      fontWeight: "400",
      fontSize: ["12px", "15px", "20px", "30px"],
      color: "#FF3606",
      position: "absolute",
      textAlign: "center",
      fontFamily: "anton",
    },
    testimonalParagraph: {
      as: "h3",
      color: " #FFFFFF",
      fontSize: "23px",
      textAlign: ["center", "center", "start", "start"],
      fontFamily: "anton",
    },
    testimonalHeading: {
      fontWeight: "400",
      fontSize: ["12px", "15px", "20px", "23px"],
      letterSpacing: "0.01em",
      color: "#000000",
      fontFamily: "anton",
    },

    testimonalHeading1: {
      as: "h2",
      color: " black",
      fontSize: "35px",
      textAlign: ["center", "center", "start", "start"],
      fontFamily: "anton",
    },
    testimonalHeading2: {
      as: "h2",
      color: " #FFFFFF",
      fontSize: "23px",
      textAlign: ["center", "center", "start", "start"],
      fontFamily: "anton",
    },

    // ******************************blog page************
    blogHeader: {
      fontWeight: "700",
      fontSize: ["15px", "20px", "30px", "30px"],
      letterSpacing: "0.02em",
      color: "#000000",
      fontFamily: "anton",
    },
    blogDate: {
      fontWeight: "400",
      fontSize: ["15px", "20px", "30px", "35px"],
      letterSpacing: "0.02em",
      color: "white",
      fontFamily: "anton",
    },
    blogParagraph: {
      fontWeight: "400",
      fontSize: ["10px", "13px", "17px", "23px"],
      letterSpacing: "0.02em",
      color: "white",
      fontFamily: "anton",
    },
    blogReadmore: {
      fontWeight: "400",
      fontSize: ["10px", "15px", "20px", "25px"],
      letterSpacing: "0.02em",
      color: "#000000",
      fontFamily: "anton",
    },
    blogMainheader: {
      as: "h1",
      fontWeight: "400",
      fontSize: ["46px", "60px", "90px", "100px"],
      letterSpacing: "0.04em",
      color: "white",
      opacity: "0.5",
      padding: "0px 20px",
      fontFamily: "anton",
    },
    blogMainheader1: {
      as: "h3",
      fontWeight: "400",
      fontSize: ["10px", "15px", "20px", "30px"],
      letterSpacing: "0.04em",
      color: "black",
      position: "absolute",
      textAlign: "center",
      fontFamily: "anton",
    },

    // ******************************footer page************
    footerQuicklink: {
      as: "h1",
      color: "#FF3606",
      fontWeight: "400",
      fontSize: ["13px", "22px", "27px", "30px"],
      pb: "15px",
      fontFamily: "anton",
    },
    footerQuicklinks: {
      as: "h3",
      color: "#FFFFFF",
      fontSize: ["12px", "17px", "23px", "23px"],
      fontFamily: "anton",
      fontWeight: "100",
      display: "flex",
    },
    footerQuicklinksSpan: {
      color: "red",
      fontSize: ["12px", "17px", "23px", "23px"],
      fontFamily: "anton",
    },
  },
};
