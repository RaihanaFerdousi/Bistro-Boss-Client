import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const {category} = useParams();
  console.log(category)
  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        img={orderImg}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        className=" my-10"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex gap-3 justify-center">
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Salad
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Pizza
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Soup
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Desserts
          </Tab>
          <Tab className="inter border-b-2 border-transparent text-gray-500 focus:outline-none selected:!text-[#BB8506] selected:!border-[#BB8506]">
            Drinks
          </Tab>
        </TabList>
        <TabPanel className="mt-10">
          <div className="grid md:grid-cols-3 gap-5">
            {salads.map((item) => (
              <FoodCard key={item.id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {pizza.map((item) => (
              <FoodCard key={item.id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {soups.map((item) => (
              <FoodCard key={item.id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {desserts.map((item) => (
              <FoodCard key={item.id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-5">
            {drinks.map((item) => (
              <FoodCard key={item.id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
