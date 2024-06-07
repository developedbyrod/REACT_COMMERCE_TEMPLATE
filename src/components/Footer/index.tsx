import { Link } from "react-router-dom";
import { FooterDataProps } from "../../types";
import Logo from "../../assets/thunder_white.png";


export default function Footer(data: FooterDataProps) {
  return (
    <footer className="p-4 w-full bg-black mx-auto">
      <div className="text-white mx-auto flex flex-col w-full justify-between items-center lg:flex-row">
        <ul className="flex-col m-5">
          <h2 className="text-xl font-semibold text-center mb-4 lg:text-start">Contact</h2>
          {data.contact.map((item, index) => {
            return (
              <li className="flex w-full justify-center lg:justify-start" key={index}>
                <Link to={item.link} className="flex">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex-col m-5">
        <h2 className="text-xl font-semibold text-center lg:text-start mb-4">Company</h2>
          {data.companyInfo.map((item, index) => {
            return (
              <li className="flex w-full justify-center lg:justify-start" key={index}>
                <Link to={item.link} className="flex">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex-col my-10 md:m-0">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="text-center mt-2">
            <p>
              Made with Love <br /> By Developedyrod
            </p>
          </div>
        </div>


        <ul className="flex-col m-5">
        <h2 className="text-xl font-semibold text-center lg:text-start mb-4">Account</h2>
          {data.account.map((item, index) => {
            return (
              <li className="flex w-full justify-center lg:justify-start" key={index}>
                <Link to={item.link} className="flex">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex-col m-5">
        <h2 className="text-xl font-semibold text-center lg:text-start mb-4">Links</h2>

          {data.quickLinks.map((item, index) => {
            return (
              <li className="flex w-full justify-center lg:justify-start" key={index}>
                <Link to={item.link} className="flex">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex border-t-[0.2px] mt-5 text-white justify-center pt-4">
          <p className="font-light text-sm">All rights reserved</p>
      </div>
    </footer>
  );
}
