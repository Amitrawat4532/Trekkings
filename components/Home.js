import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = ({ settings }) => {
  return (
    <>
      {/* main container */}
      <Flex
        className="home_container"
        w="100vw"
        h="100vh"
        bgImg={[
          "url('/images/newmobilebg.png')",
          "url('/images/newmobilebg.png')",
          "url('/images/newbg.png')",
          "url('/images/newbg.png')",
        ]}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {/* heading container */}
        <Box>
          <Text variant="homeHeader1" pt={["0px", "0px", "130px", "130px"]}>
            MAKE THE
          </Text>
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            initiallyVisible={true}
            animateOnce={true}
          >
            <Text variant="homeHeader2">IMPOSSIBLE</Text>
          </AnimationOnScroll>
          <Flex
            justifyContent="center"
            gap="15px"
            pb={["40px", "40px", "0px", "0px"]}
          >
            {/* <a href="#" target="_blank">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.9168 12.4987C22.9168 6.7487 18.2502 2.08203 12.5002 2.08203C6.75016 2.08203 2.0835 6.7487 2.0835 12.4987C2.0835 17.5404 5.66683 21.7383 10.4168 22.707V15.6237H8.3335V12.4987H10.4168V9.89453C10.4168 7.88411 12.0522 6.2487 14.0627 6.2487H16.6668V9.3737H14.5835C14.0106 9.3737 13.5418 9.84245 13.5418 10.4154V12.4987H16.6668V15.6237H13.5418V22.8633C18.8022 22.3424 22.9168 17.9049 22.9168 12.4987Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/igatpurihillstrektourism/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.625 10.5C13.625 11.1181 13.4417 11.7223 13.0983 12.2362C12.755 12.7501 12.2669 13.1506 11.6959 13.3871C11.1249 13.6236 10.4965 13.6855 9.89034 13.565C9.28415 13.4444 8.72733 13.1467 8.29029 12.7097C7.85325 12.2727 7.55562 11.7158 7.43505 11.1097C7.31447 10.5035 7.37635 9.87513 7.61288 9.30411C7.8494 8.73309 8.24994 8.24504 8.76384 7.90166C9.27775 7.55828 9.88193 7.375 10.5 7.375C11.328 7.37758 12.1214 7.70764 12.7069 8.29314C13.2924 8.87863 13.6224 9.67199 13.625 10.5ZM20.2656 6.20312V14.7969C20.2656 16.2473 19.6895 17.6383 18.6639 18.6639C17.6383 19.6895 16.2473 20.2656 14.7969 20.2656H6.20312C4.75272 20.2656 3.36172 19.6895 2.33613 18.6639C1.31055 17.6383 0.734375 16.2473 0.734375 14.7969V6.20312C0.734375 4.75272 1.31055 3.36172 2.33613 2.33613C3.36172 1.31055 4.75272 0.734375 6.20312 0.734375H14.7969C16.2473 0.734375 17.6383 1.31055 18.6639 2.33613C19.6895 3.36172 20.2656 4.75272 20.2656 6.20312ZM15.1875 10.5C15.1875 9.5729 14.9126 8.66662 14.3975 7.89576C13.8824 7.12491 13.1504 6.5241 12.2938 6.16931C11.4373 5.81453 10.4948 5.7217 9.58551 5.90257C8.67623 6.08344 7.841 6.52988 7.18544 7.18544C6.52988 7.841 6.08344 8.67623 5.90257 9.58551C5.7217 10.4948 5.81453 11.4373 6.16931 12.2938C6.5241 13.1504 7.12491 13.8824 7.89576 14.3975C8.66662 14.9126 9.5729 15.1875 10.5 15.1875C11.7432 15.1875 12.9355 14.6936 13.8146 13.8146C14.6936 12.9355 15.1875 11.7432 15.1875 10.5ZM16.75 5.42188C16.75 5.1901 16.6813 4.96353 16.5525 4.77082C16.4237 4.5781 16.2407 4.4279 16.0266 4.3392C15.8124 4.25051 15.5768 4.2273 15.3495 4.27252C15.1222 4.31773 14.9134 4.42934 14.7495 4.59323C14.5856 4.75712 14.474 4.96593 14.4288 5.19325C14.3835 5.42057 14.4068 5.6562 14.4955 5.87033C14.5842 6.08446 14.7344 6.26749 14.9271 6.39625C15.1198 6.52502 15.3463 6.59375 15.5781 6.59375C15.8889 6.59375 16.187 6.47028 16.4068 6.25052C16.6265 6.03075 16.75 5.73268 16.75 5.42188Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href={`https://wa.me/91${settings?.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0876767 20.9154L1.49601 15.7404C0.568029 14.1496 0.080485 12.3404 0.0835101 10.4987C0.0835101 4.74557 4.74705 0.0820312 10.5002 0.0820312C16.2533 0.0820312 20.9168 4.74557 20.9168 10.4987C20.9168 16.2518 16.2533 20.9154 10.5002 20.9154C8.65932 20.9183 6.85086 20.4312 5.26059 19.5039L0.0876767 20.9154ZM6.7408 5.6112C6.60628 5.61955 6.47484 5.65498 6.35434 5.71536C6.24134 5.77935 6.13819 5.85935 6.04809 5.95286C5.92309 6.07057 5.85226 6.17266 5.77622 6.27161C5.39123 6.77265 5.18414 7.38767 5.18768 8.01953C5.18976 8.52995 5.32309 9.02682 5.53143 9.49141C5.95747 10.431 6.65851 11.4258 7.58455 12.3477C7.80747 12.5695 8.02518 12.7924 8.25955 12.9997C9.40892 14.0117 10.7786 14.7414 12.2596 15.131L12.8523 15.2216C13.045 15.232 13.2377 15.2174 13.4314 15.2081C13.7348 15.1924 14.031 15.1103 14.2991 14.9674C14.4355 14.8972 14.5687 14.8207 14.6981 14.7383C14.6981 14.7383 14.7429 14.7091 14.8283 14.6445C14.9689 14.5404 15.0554 14.4664 15.1721 14.3445C15.2585 14.2549 15.3335 14.1497 15.3908 14.0299C15.4721 13.8602 15.5533 13.5362 15.5866 13.2664C15.6116 13.0602 15.6043 12.9477 15.6012 12.8779C15.5971 12.7664 15.5043 12.6508 15.4033 12.6018L14.7971 12.3299C14.7971 12.3299 13.8908 11.9352 13.3377 11.6831C13.2794 11.6577 13.2169 11.6432 13.1533 11.6404C13.082 11.633 13.01 11.6411 12.9421 11.6639C12.8742 11.6867 12.8119 11.7238 12.7596 11.7727V11.7706C12.7543 11.7706 12.6846 11.8299 11.9314 12.7424C11.8882 12.8005 11.8287 12.8444 11.7604 12.8685C11.6921 12.8927 11.6182 12.8959 11.5481 12.8779C11.4802 12.8597 11.4137 12.8367 11.3491 12.8091C11.22 12.7549 11.1752 12.7341 11.0866 12.6956L11.0814 12.6935C10.4855 12.4333 9.93374 12.0819 9.44601 11.6518C9.31476 11.5372 9.19288 11.4122 9.06788 11.2914C8.65807 10.8989 8.30092 10.455 8.00538 9.97057L7.94393 9.87161C7.89978 9.80512 7.86409 9.73339 7.83768 9.65807C7.79809 9.50495 7.90122 9.38203 7.90122 9.38203C7.90122 9.38203 8.15434 9.10495 8.27205 8.95495C8.37006 8.83028 8.4615 8.70059 8.54601 8.56641C8.66893 8.36849 8.70747 8.16536 8.64288 8.00807C8.35122 7.29557 8.04913 6.5862 7.73872 5.88203C7.67726 5.74245 7.49497 5.64245 7.32934 5.62266C7.27309 5.61641 7.21684 5.61016 7.16059 5.60599C7.0207 5.59904 6.88052 5.60147 6.7408 5.6112Z"
                  fill="white"
                />
              </svg>
            </a> */}
            {/* <svg width="135" height="25" viewBox="0 0 135 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.613 11.847C21.613 6.45675 17.2383 2.08203 11.848 2.08203C6.45773 2.08203 2.08301 6.45675 2.08301 11.847C2.08301 16.5733 5.44217 20.5086 9.89501 21.4167V14.7765H7.94201V11.847H9.89501V9.40578C9.89501 7.52114 11.4281 5.98803 13.3128 5.98803H15.754V8.91753H13.801C13.2639 8.91753 12.8245 9.35696 12.8245 9.89403V11.847H15.754V14.7765H12.8245V21.5632C17.7558 21.075 21.613 16.9151 21.613 11.847Z" fill="white"/>
<path d="M70.625 12.5C70.625 13.1181 70.4417 13.7223 70.0983 14.2362C69.755 14.7501 69.2669 15.1506 68.6959 15.3871C68.1249 15.6236 67.4965 15.6855 66.8903 15.565C66.2842 15.4444 65.7273 15.1467 65.2903 14.7097C64.8533 14.2727 64.5556 13.7158 64.435 13.1097C64.3145 12.5035 64.3764 11.8751 64.6129 11.3041C64.8494 10.7331 65.2499 10.245 65.7638 9.90166C66.2777 9.55828 66.8819 9.375 67.5 9.375C68.328 9.37758 69.1214 9.70764 69.7069 10.2931C70.2924 10.8786 70.6224 11.672 70.625 12.5ZM77.2656 8.20312V16.7969C77.2656 18.2473 76.6895 19.6383 75.6639 20.6639C74.6383 21.6895 73.2473 22.2656 71.7969 22.2656H63.2031C61.7527 22.2656 60.3617 21.6895 59.3361 20.6639C58.3105 19.6383 57.7344 18.2473 57.7344 16.7969V8.20312C57.7344 6.75272 58.3105 5.36172 59.3361 4.33613C60.3617 3.31055 61.7527 2.73438 63.2031 2.73438H71.7969C73.2473 2.73438 74.6383 3.31055 75.6639 4.33613C76.6895 5.36172 77.2656 6.75272 77.2656 8.20312ZM72.1875 12.5C72.1875 11.5729 71.9126 10.6666 71.3975 9.89576C70.8824 9.12491 70.1504 8.5241 69.2938 8.16931C68.4373 7.81453 67.4948 7.7217 66.5855 7.90257C65.6762 8.08344 64.841 8.52988 64.1854 9.18544C63.5299 9.841 63.0834 10.6762 62.9026 11.5855C62.7217 12.4948 62.8145 13.4373 63.1693 14.2938C63.5241 15.1504 64.1249 15.8824 64.8958 16.3975C65.6666 16.9126 66.5729 17.1875 67.5 17.1875C68.7432 17.1875 69.9355 16.6936 70.8146 15.8146C71.6936 14.9355 72.1875 13.7432 72.1875 12.5ZM73.75 7.42188C73.75 7.1901 73.6813 6.96353 73.5525 6.77082C73.4237 6.5781 73.2407 6.4279 73.0266 6.3392C72.8124 6.25051 72.5768 6.2273 72.3495 6.27252C72.1222 6.31773 71.9134 6.42934 71.7495 6.59323C71.5856 6.75712 71.474 6.96593 71.4288 7.19325C71.3835 7.42057 71.4068 7.6562 71.4955 7.87033C71.5842 8.08446 71.7344 8.26749 71.9271 8.39625C72.1198 8.52502 72.3463 8.59375 72.5781 8.59375C72.8889 8.59375 73.187 8.47028 73.4068 8.25052C73.6265 8.03075 73.75 7.73268 73.75 7.42188Z" fill="white"/>
<path d="M112.087 22.9154L113.496 17.7404C112.568 16.1496 112.08 14.3404 112.083 12.4987C112.083 6.74557 116.747 2.08203 122.5 2.08203C128.253 2.08203 132.916 6.74557 132.916 12.4987C132.916 18.2518 128.253 22.9154 122.5 22.9154C120.659 22.9183 118.85 22.4312 117.26 21.5039L112.087 22.9154ZM118.74 7.6112C118.606 7.61955 118.474 7.65498 118.354 7.71536C118.241 7.77935 118.138 7.85935 118.048 7.95286C117.923 8.07057 117.852 8.17266 117.776 8.27161C117.391 8.77265 117.184 9.38767 117.187 10.0195C117.189 10.5299 117.323 11.0268 117.531 11.4914C117.957 12.431 118.658 13.4258 119.584 14.3477C119.807 14.5695 120.025 14.7924 120.259 14.9997C121.408 16.0117 122.778 16.7414 124.259 17.131L124.852 17.2216C125.044 17.232 125.237 17.2174 125.431 17.2081C125.734 17.1924 126.031 17.1103 126.299 16.9674C126.435 16.8972 126.568 16.8207 126.698 16.7383C126.698 16.7383 126.742 16.7091 126.828 16.6445C126.968 16.5404 127.055 16.4664 127.172 16.3445C127.258 16.2549 127.333 16.1497 127.39 16.0299C127.472 15.8602 127.553 15.5362 127.586 15.2664C127.611 15.0602 127.604 14.9477 127.601 14.8779C127.597 14.7664 127.504 14.6508 127.403 14.6018L126.797 14.3299C126.797 14.3299 125.89 13.9352 125.337 13.6831C125.279 13.6577 125.216 13.6432 125.153 13.6404C125.082 13.633 125.01 13.6411 124.942 13.6639C124.874 13.6867 124.811 13.7238 124.759 13.7727V13.7706C124.754 13.7706 124.684 13.8299 123.931 14.7424C123.888 14.8005 123.828 14.8444 123.76 14.8685C123.692 14.8927 123.618 14.8959 123.548 14.8779C123.48 14.8597 123.413 14.8367 123.349 14.8091C123.219 14.7549 123.175 14.7341 123.086 14.6956L123.081 14.6935C122.485 14.4333 121.933 14.0819 121.446 13.6518C121.314 13.5372 121.192 13.4122 121.067 13.2914C120.658 12.8989 120.3 12.455 120.005 11.9706L119.943 11.8716C119.899 11.8051 119.864 11.7334 119.837 11.6581C119.798 11.5049 119.901 11.382 119.901 11.382C119.901 11.382 120.154 11.1049 120.272 10.9549C120.37 10.8303 120.461 10.7006 120.546 10.5664C120.668 10.3685 120.707 10.1654 120.642 10.0081C120.351 9.29557 120.049 8.5862 119.738 7.88203C119.677 7.74245 119.494 7.64245 119.329 7.62266C119.273 7.61641 119.216 7.61016 119.16 7.60599C119.02 7.59904 118.88 7.60147 118.74 7.6112Z" fill="white"/>
</svg> */}
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.613 11.847C21.613 6.45675 17.2383 2.08203 11.848 2.08203C6.45773 2.08203 2.08301 6.45675 2.08301 11.847C2.08301 16.5733 5.44217 20.5086 9.89501 21.4167V14.7765H7.94201V11.847H9.89501V9.40578C9.89501 7.52114 11.4281 5.98803 13.3128 5.98803H15.754V8.91753H13.801C13.2639 8.91753 12.8245 9.35696 12.8245 9.89403V11.847H15.754V14.7765H12.8245V21.5632C17.7558 21.075 21.613 16.9151 21.613 11.847Z" fill="white"/>
</svg>


<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 12.5C15.625 13.1181 15.4417 13.7223 15.0983 14.2362C14.755 14.7501 14.2669 15.1506 13.6959 15.3871C13.1249 15.6236 12.4965 15.6855 11.8903 15.565C11.2842 15.4444 10.7273 15.1467 10.2903 14.7097C9.85325 14.2727 9.55562 13.7158 9.43505 13.1097C9.31447 12.5035 9.37635 11.8751 9.61288 11.3041C9.8494 10.7331 10.2499 10.245 10.7638 9.90166C11.2777 9.55828 11.8819 9.375 12.5 9.375C13.328 9.37758 14.1214 9.70764 14.7069 10.2931C15.2924 10.8786 15.6224 11.672 15.625 12.5ZM22.2656 8.20312V16.7969C22.2656 18.2473 21.6895 19.6383 20.6639 20.6639C19.6383 21.6895 18.2473 22.2656 16.7969 22.2656H8.20312C6.75272 22.2656 5.36172 21.6895 4.33613 20.6639C3.31055 19.6383 2.73438 18.2473 2.73438 16.7969V8.20312C2.73438 6.75272 3.31055 5.36172 4.33613 4.33613C5.36172 3.31055 6.75272 2.73438 8.20312 2.73438H16.7969C18.2473 2.73438 19.6383 3.31055 20.6639 4.33613C21.6895 5.36172 22.2656 6.75272 22.2656 8.20312ZM17.1875 12.5C17.1875 11.5729 16.9126 10.6666 16.3975 9.89576C15.8824 9.12491 15.1504 8.5241 14.2938 8.16931C13.4373 7.81453 12.4948 7.7217 11.5855 7.90257C10.6762 8.08344 9.841 8.52988 9.18544 9.18544C8.52988 9.841 8.08344 10.6762 7.90257 11.5855C7.7217 12.4948 7.81453 13.4373 8.16931 14.2938C8.5241 15.1504 9.12491 15.8824 9.89576 16.3975C10.6666 16.9126 11.5729 17.1875 12.5 17.1875C13.7432 17.1875 14.9355 16.6936 15.8146 15.8146C16.6936 14.9355 17.1875 13.7432 17.1875 12.5ZM18.75 7.42188C18.75 7.1901 18.6813 6.96353 18.5525 6.77082C18.4237 6.5781 18.2407 6.4279 18.0266 6.3392C17.8124 6.25051 17.5768 6.2273 17.3495 6.27252C17.1222 6.31773 16.9134 6.42934 16.7495 6.59323C16.5856 6.75712 16.474 6.96593 16.4288 7.19325C16.3835 7.42057 16.4068 7.6562 16.4955 7.87033C16.5842 8.08446 16.7344 8.26749 16.9271 8.39625C17.1198 8.52502 17.3463 8.59375 17.5781 8.59375C17.8889 8.59375 18.187 8.47028 18.4068 8.25052C18.6265 8.03075 18.75 7.73268 18.75 7.42188Z" fill="white"/>
</svg>


<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.08719 22.9154L3.49552 17.7404C2.56754 16.1496 2.08 14.3404 2.08302 12.4987C2.08302 6.74557 6.74656 2.08203 12.4997 2.08203C18.2528 2.08203 22.9164 6.74557 22.9164 12.4987C22.9164 18.2518 18.2528 22.9154 12.4997 22.9154C10.6588 22.9183 8.85037 22.4312 7.2601 21.5039L2.08719 22.9154ZM8.74031 7.6112C8.60579 7.61955 8.47435 7.65498 8.35386 7.71536C8.24086 7.77935 8.1377 7.85935 8.0476 7.95286C7.9226 8.07057 7.85177 8.17266 7.77573 8.27161C7.39074 8.77265 7.18366 9.38767 7.18719 10.0195C7.18927 10.5299 7.3226 11.0268 7.53094 11.4914C7.95698 12.431 8.65802 13.4258 9.58406 14.3477C9.80698 14.5695 10.0247 14.7924 10.2591 14.9997C11.4084 16.0117 12.7781 16.7414 14.2591 17.131L14.8518 17.2216C15.0445 17.232 15.2372 17.2174 15.4309 17.2081C15.7343 17.1924 16.0305 17.1103 16.2986 16.9674C16.4351 16.8972 16.5682 16.8207 16.6976 16.7383C16.6976 16.7383 16.7424 16.7091 16.8278 16.6445C16.9684 16.5404 17.0549 16.4664 17.1716 16.3445C17.258 16.2549 17.333 16.1497 17.3903 16.0299C17.4716 15.8602 17.5528 15.5362 17.5861 15.2664C17.6111 15.0602 17.6039 14.9477 17.6007 14.8779C17.5966 14.7664 17.5039 14.6508 17.4028 14.6018L16.7966 14.3299C16.7966 14.3299 15.8903 13.9352 15.3372 13.6831C15.2789 13.6577 15.2164 13.6432 15.1528 13.6404C15.0815 13.633 15.0095 13.6411 14.9416 13.6639C14.8737 13.6867 14.8115 13.7238 14.7591 13.7727V13.7706C14.7539 13.7706 14.6841 13.8299 13.9309 14.7424C13.8877 14.8005 13.8282 14.8444 13.7599 14.8685C13.6916 14.8927 13.6177 14.8959 13.5476 14.8779C13.4797 14.8597 13.4132 14.8367 13.3486 14.8091C13.2195 14.7549 13.1747 14.7341 13.0861 14.6956L13.0809 14.6935C12.485 14.4333 11.9333 14.0819 11.4455 13.6518C11.3143 13.5372 11.1924 13.4122 11.0674 13.2914C10.6576 12.8989 10.3004 12.455 10.0049 11.9706L9.94344 11.8716C9.89929 11.8051 9.8636 11.7334 9.83719 11.6581C9.79761 11.5049 9.90073 11.382 9.90073 11.382C9.90073 11.382 10.1539 11.1049 10.2716 10.9549C10.3696 10.8303 10.461 10.7006 10.5455 10.5664C10.6684 10.3685 10.707 10.1654 10.6424 10.0081C10.3507 9.29557 10.0486 8.5862 9.73823 7.88203C9.67677 7.74245 9.49448 7.64245 9.32886 7.62266C9.2726 7.61641 9.21635 7.61016 9.1601 7.60599C9.02022 7.59904 8.88004 7.60147 8.74031 7.6112Z" fill="white"/>
</svg>


          </Flex>
        </Box>
             </Flex>
    </>
  );
};

export default Home;
