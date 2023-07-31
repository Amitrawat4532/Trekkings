import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import moment from "moment";
import { Text } from "@chakra-ui/react";

const SmallCard = (props) => {
  const {
    name,
    price,
    startDate,
    images,
    location,
    stay,
    description,
    food,
    endDate,
  } = props.data;

  return (
    <>
      <Box
        className="TravelGuideCardParis"
        style={{
          minWidth: 300,
          // maxWidth: 370,
          height: 551,
          padding: 16,
          background: "white",
          boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.08)",
          borderRadius: 16,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
          display: "inline-flex",
        }}
      >
        {/* Image */}
        <div
          className="Imagery"
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            borderRadius: 8,
            overflow: "hidden",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
            height: "256px",
            width: "100%",
            position: "relative",
            backgroundColor: "gray",
          }}
        >
          <Image
            layout="fill"
            src={
              Array.isArray(images)
                ? images[0]?.img_url
                : "/images/finallogo.png"
            }
            alt={`IGATPURIHILLSTREKTOURISM EVENTS`}
            // width="100%"
            // height={["200px", "200px"]}
            objectFit="cover"
            fallbackSrc="/images/logo.png"
          />
        </div>

        {/* Details */}
        <div
          className="Information"
          style={{
            alignSelf: "stretch",
            height: 135,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // gap: 16,
            display: "flex",
            // border: "1px solid red",
          }}
        >
          <Text
            color="#241314"
            fontFamily="Inter"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="600"
          >
            {name}
          </Text>
          <Text
            style={{
              color: "#000",
              opacity: ".6",
              fontFamily: "Raleway",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "27px",
              textTransform: "uppercase",
              padding: "5px 0",
              background:'blue'
            }}
          >
            {location}
          </Text>
          <div
            className="MoreInformation"
            style={{
              alignSelf: "stretch",
              height: 40,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 8,
              display: "flex",
            }}
          >
            <div
              className="Info1"
              style={{
                width: 292,
                opacity: 0.7,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="TimeClock"
                style={{ width: 16, height: 16, position: "relative" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00016 1.33203C4.32683 1.33203 1.3335 4.32536 1.3335 7.9987C1.3335 11.672 4.32683 14.6654 8.00016 14.6654C11.6735 14.6654 14.6668 11.672 14.6668 7.9987C14.6668 4.32536 11.6735 1.33203 8.00016 1.33203ZM11.0402 6.88537L8.30017 8.94536C8.28684 8.95203 8.26683 8.9587 8.2535 8.97204C8.2335 8.9787 8.22015 8.98537 8.20015 8.99203C8.14015 9.02537 8.06683 9.04537 8.00016 9.04537C7.9335 9.04537 7.86682 9.02536 7.80682 8.9987C7.79349 8.99203 7.78017 8.98536 7.76017 8.9787C7.74684 8.97203 7.73349 8.96537 7.72015 8.9587L5.72015 7.58537C5.49349 7.43203 5.43351 7.1187 5.59351 6.89203C5.74684 6.66536 6.06016 6.60536 6.28682 6.7587L7.98684 7.92536L10.4402 6.08537C10.6602 5.9187 10.9735 5.96536 11.1402 6.18536C11.3068 6.40536 11.2602 6.7187 11.0402 6.88537Z"
                    fill="#241314"
                  />
                </svg>
              </div>
              <div
                className="Nov30Nov"
                style={{
                  flex: "1 1 0",
                  color: "#241314",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                {moment(startDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")}-
                {moment(endDate, "YYYY-MM-DD HH:mm").format("DD MMM YY")}
              </div>
            </div>
            <div
              className="Info2"
              style={{
                width: 292,
                opacity: 0.7,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 8,
                display: "inline-flex",
              }}
            >
              <div
                className="User1"
                style={{ width: 16, height: 16, position: "relative" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.79063 7.67003C9.55359 7.67003 10.9952 6.23709 10.9952 4.47413C10.9952 2.71117 9.56228 1.26953 7.79063 1.26953C6.02767 1.26953 4.59473 2.70248 4.59473 4.47413C4.59473 6.24577 6.02767 7.67003 7.79063 7.67003Z"
                    fill="#241314"
                  />
                  <path
                    d="M10.2919 8.91016H5.71513C3.66559 8.91016 2.00684 10.5776 2.00684 12.6184V13.209C2.00684 14.0427 2.69291 14.7288 3.52663 14.7288H12.4804C13.3141 14.7288 14.0002 14.0427 14.0002 13.209V12.6271C14.0002 10.5776 12.3327 8.91016 10.2919 8.91016Z"
                    fill="#241314"
                  />
                </svg>
              </div>
              <div
                className="70Person"
                style={{
                  flex: "1 1 0",
                  color: "#241314",
                  fontSize: 12,
                  fontFamily: "Inter",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                50-70 person
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <Flex
          flexDirection={"column"}
          gap="3"
          mt="30"
          w="100%"
          // border="3px solid red"
        >
          <Button
            colorScheme="blue"
            w="100%"
            background="#241314"
            color="white"
            borderRadius="8px"
          >
            Contact Us
          </Button>
          <Button
            w="100%"
            background="#E9E9E9"
            color="black"
            borderRadius="8px"
          >
            Know More
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default SmallCard;
