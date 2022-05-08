import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "./BlogBox";
import FullButton from "./FullButton";
import TestimonialSlider from "./TestimonialSlider";
import i18n from "i18next";
import {initReactI18next, useTranslation} from "react-i18next";
import {Translations_En} from "../translateEn";
import {Translations_Fr} from "../translateFr";
import {Translations_Hn} from "../translateHn";
i18n
    .use(initReactI18next)
    .init({
      resources:{
        en:{translation:Translations_En},
        fr:{translation:Translations_Fr},
        hn:{translation:Translations_Hn}
      },
      lng:"en",
      fallbackLng:"en",
      interpolation:{escapeValue:false}
    });
export default function Blog() {
  const { t } = useTranslation();
  function updLang(val){
    i18n.changeLanguage(val);
  }

  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">{t("heybuddy")}</h1>
            <p className="font13">
              <b>{t("WhatisPUSHD")}</b>
              <br />
              {t("para")}


            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("forwhom")}
                text={t("forwhompara")}


              tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title={t("whattoexpect")}
                text={t("whattoexpectpara")}
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Why PUSH-D Developed?"
                text="Depression is a common mental health concern which affects a large proportion of individuals at any given point of time. Depression can impact our functioning and quality of life even when the symptoms are mild in severity or too minimal to label it as clinical depression or a disorder."
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Technology Support"
                text="PUSH-D was developed by a team of young scholars under the leadership of Professor T.K. Srikanth, E-Health Research Center,(IIIT-B), Bangalore. The program is supported on an ongoing basis by the team at IIIT-B and NIMHANS Data Center, led by Ms. Sindhu M.G."
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" >
              <BlogBox
                title="Computer/Mobile App"
                text="The program requires you to access your desktop/laptop/smartphone.PUSH-D mobile app,the web-based version can be accessed via desktop/laptop. As PUSH-D is an intensive, interactive self-help course, several users prefer accessing it via the web-version."
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Progress Section"
                text=" These are sections of the program ordered in a sequence. These are sections typically helpful for individuals with depressive symptoms. Apart from this, there are some optional sections that you can explore at any point and use depending on your need/concerns.."
                tag=""
                author=""
                action={() => alert("clicked")}
              />
            </div>
          </div>

        </div>
      </div>
      {/*<div className="lightBg" style={{padding: '50px 0'}}>*/}
      {/*  <div className="container">*/}
      {/*    <HeaderInfo>*/}
      {/*      <h1 className="font40 extraBold">What They Say?</h1>*/}
      {/*      <p className="font13">*/}
      {/*        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut*/}
      {/*        <br />*/}
      {/*        labore et dolore magna aliquyam erat, sed diam voluptua.*/}
      {/*      </p>*/}
      {/*    </HeaderInfo>*/}
      {/*    <TestimonialSlider />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;