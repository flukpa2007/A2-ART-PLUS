import React from 'react';
import { 
  Layout, 
  Box, 
  Monitor, 
  Paintbrush, 
  Hammer, 
  MessageSquare, 
  PenTool, 
  Settings, 
  Truck 
} from 'lucide-react';
import { Service, Project, ProcessStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "ป้ายตัวอักษร (Signage Letters)",
    description: "รับผลิตและติดตั้งป้ายตัวอักษร อะคริลิค พลาสวูด ซิงค์ สแตนเลส",
    icon: <Layout className="w-8 h-8" />,
    image: "/images/letter/img-letter-02.jpg",
    gallery: ["/images/letter/img-letter-01.jpg", 
              "/images/letter/img-letter-03.jpg",
              "/images/letter/img-letter-04.jpg",
              "/images/letter/img-letter-05.jpg",
              "/images/letter/img-letter-06.jpg",
              "/images/letter/img-letter-07.jpg",
              "/images/letter/img-letter-08.jpg",
              "/images/letter/img-letter-09.jpg"],
    article: "ป้ายตัวอักษรช่วยเพิ่มความโดดเด่นให้กับธุรกิจของคุณ เราใช้วัสดุคุณภาพสูง ทนทานต่อสภาพอากาศ พร้อมทีมงานติดตั้งมืออาชีพ"
  },
  {
    id: 2,
    title: "ป้ายไฟ LED (LED Signage)",
    description: "ป้ายไฟตัวอักษร ตู้ไฟ LED ประหยัดพลังงาน สว่างสม่ำเสมอ โดดเด่นทั้งกลางวันและกลางคืน",
    icon: <Box className="w-8 h-8" />,
    image: "/images/led/img-led-08.png",
    gallery: ["/images/led/img-led-01.jpg",
              "/images/led/img-led-02.jpg",
              "/images/led/img-led-03.jpg",
              "/images/led/img-led-04.jpg",
              "/images/led/img-led-05.jpg",
              "/images/led/img-led-06.jpg",
              "/images/led/img-led-07.jpg",
              "/images/led/img-led-09.png",
              "/images/led/img-led-10.jpg"],
    article: "เพิ่มการมองเห็นให้ร้านค้าของคุณด้วยป้ายไฟ LED ดีไซน์ทันสมัย เราใช้ชิป LED เกรดพรีเมียม ให้ความสว่างสูงและอายุการใช้งานที่ยาวนาน"
  },
  {
    id: 3,
    title: "งานสติกเกอร์ (Sticker Graphics)",
    description: "สติกเกอร์ติดกระจก สติกเกอร์ไดคัท สติกเกอร์ติดรถยนต์ งานพิมพ์คุณภาพสูง สีสดทนทาน",
    icon: <Monitor className="w-8 h-8" />,
    image: "/images/stk/img-stk-09.jpg",
    gallery: ["/images/stk/img-stk-02.jpg",
              "/images/stk/img-stk-03.jpg",
              "/images/stk/img-stk-04.jpg",
              "/images/stk/img-stk-05.jpg",
              "/images/stk/img-stk-06.jpg",
              "/images/stk/img-stk-07.jpg",
              "/images/stk/img-stk-08.jpg",
              "/images/stk/img-stk-10.jpg",
              "/images/stk/img-stk-01.jpg",
              "/images/stk/img-stk-11.jpg",
              "/images/stk/img-stk-12.jpg"],
    article: "ตกแต่งพื้นที่ของคุณด้วยงานสติกเกอร์คุณภาพสูง ทั้งงานตกแต่งภายในและภายนอกอาคาร ทนแดด ทนฝน ไม่ลอกง่าย"
  },
  {
    id: 4,
    title: "งานไวนิล (Vinyl Banners)",
    description: "ป้ายไวนิลโฆษณา สแตนดี้ ธงญี่ปุ่น งานพิมพ์ขนาดใหญ่สำหรับงานอีเวนต์และโปรโมชั่น",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/images/vn/img-vn-01.jpg",
    gallery: ["/images/vn/img-vn-02.jpg",
              "/images/vn/img-vn-03.jpg",
              "/images/vn/img-vn-04.jpg",
              "/images/vn/img-vn-05.jpg",
              "/images/vn/img-vn-06.jpg",
              "/images/vn/img-vn-07.jpg",
              "/images/vn/img-vn-08.jpg",
              "/images/vn/img-vn-09.jpg"],
    article: "งานพิมพ์ไวนิลความละเอียดสูง สีสันคมชัด เหมาะสำหรับงานโฆษณาทุกรูปแบบ พร้อมบริการออกแบบและติดตั้ง"
  },
  {
    id: 5,
    title: "งานบิวท์อิน (Built-in Furniture)",
    description: "รับออกแบบและตกแต่งภายใน เฟอร์นิเจอร์บิวท์อินสำหรับร้านค้า คลินิก และออฟฟิศ",
    icon: <Hammer className="w-8 h-8" />,
    image: "/images/bu/img-bu-03.jpg",
    gallery: ["/images/bu/img-bu-01.jpg",
              "/images/bu/img-bu-02.jpg",
              "/images/bu/img-bu-04.jpg",
              "/images/bu/img-bu-05.jpg",
              "/images/bu/img-bu-06.jpg",
              "/images/bu/img-bu-07.jpg",
              "/images/bu/img-bu-08.jpg",
              "/images/bu/img-bu-09.jpg",
              "/images/bu/img-bu-10.jpg"],
    article: "เปลี่ยนพื้นที่ว่างให้เป็นพื้นที่ใช้งานที่ลงตัว ด้วยงานบิวท์อินดีไซน์เฉพาะตัวที่สะท้อนภาพลักษณ์แบรนด์ของคุณ"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "งานตกแต่งภายใน Dr.Milk Clinic",
    category: "Medical / Clinic",
    image: "/images/project-1.jpg",
    images: [
      "/images/project-1.jpg",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 2,
    title: "งานตกแต่งภายใน Kamon Coffee",
    category: "Interior / Cafe",
    image: "/images/project-2.jpg",
    images: [
      "/images/project-2.jpg",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 3,
    title: "งานตกแต่งภายใน ห้องประชุม The Brain",
    category: "Interior / Coporate",
    image: "/images/project-3.jpg",
    images: [
      "/images/project-3.jpg",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: 4,
    title: "งานตกแต่งภายใน Office MLP",
    category: "School / Office",  
    image: "/images/project-4.jpg",
    images: [
      "/images/project-4.jpg",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    id: 1,
    title: "Consultation",
    description: "พูดคุยความต้องการและประเมินหน้างาน",
    icon: <MessageSquare className="w-10 h-10" />
  },
  {
    id: 2,
    title: "Design",
    description: "ออกแบบ 3D และเลือกวัสดุที่เหมาะสม",
    icon: <PenTool className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Production",
    description: "ผลิตชิ้นงานด้วยเครื่องจักรที่ทันสมัย",
    icon: <Settings className="w-10 h-10" />
  },
  {
    id: 4,
    title: "Installation",
    description: "ติดตั้งโดยทีมงานผู้ชำนาญการ",
    icon: <Truck className="w-10 h-10" />
  }
];
