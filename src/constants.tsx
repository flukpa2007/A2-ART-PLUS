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
    image: "/images/letter/img-letter-02.webp",
    gallery: ["/images/letter/img-letter-01.webp", 
              "/images/letter/img-letter-03.webp",
              "/images/letter/img-letter-04.webp",
              "/images/letter/img-letter-05.webp",
              "/images/letter/img-letter-06.webp",
              "/images/letter/img-letter-07.webp",
              "/images/letter/img-letter-08.webp",
              "/images/letter/img-letter-09.webp"],
    article: "อะคริลิค พลาสวูด ซิงค์ สแตนเลส ป้ายตัวอักษรช่วยเพิ่มความโดดเด่นให้กับธุรกิจของคุณ เราใช้วัสดุคุณภาพสูง ทนทานต่อสภาพอากาศ พร้อมทีมงานติดตั้งมืออาชีพ"
  },
  {
    id: 2,
    title: "ป้ายไฟ LED (LED Signage)",
    description: "ป้ายไฟตัวอักษร ตู้ไฟ LED ประหยัดพลังงาน สว่างสม่ำเสมอ โดดเด่นทั้งกลางวันและกลางคืน",
    icon: <Box className="w-8 h-8" />,
    image: "/images/led/img-led-08.webp",
    gallery: ["/images/led/img-led-01.webp",
              "/images/led/img-led-02.webp",
              "/images/led/img-led-03.webp",
              "/images/led/img-led-04.webp",
              "/images/led/img-led-05.webp",
              "/images/led/img-led-06.webp",
              "/images/led/img-led-07.webp",
              "/images/led/img-led-09.webp",
              "/images/led/img-led-10.webp"],
    article: "เพิ่มการมองเห็นให้ร้านค้าของคุณด้วยป้ายไฟ LED ดีไซน์ทันสมัย เราใช้ชิป LED เกรดพรีเมียม ให้ความสว่างสูงและอายุการใช้งานที่ยาวนาน"
  },
  {
    id: 3,
    title: "งานสติกเกอร์ (Sticker Graphics)",
    description: "สติกเกอร์ติดกระจก สติกเกอร์ไดคัท สติกเกอร์ติดรถยนต์ งานพิมพ์คุณภาพสูง สีสดทนทาน",
    icon: <Monitor className="w-8 h-8" />,
    image: "/images/stk/img-stk-09.webp",
    gallery: ["/images/stk/img-stk-02.webp",
              "/images/stk/img-stk-03.webp",
              "/images/stk/img-stk-04.webp",
              "/images/stk/img-stk-05.webp",
              "/images/stk/img-stk-06.webp",
              "/images/stk/img-stk-07.webp",
              "/images/stk/img-stk-08.webp",
              "/images/stk/img-stk-10.webp",
              "/images/stk/img-stk-01.webp",
              "/images/stk/img-stk-11.webp",
              "/images/stk/img-stk-12.webp"],
    article: "ตกแต่งพื้นที่ของคุณด้วยงานสติกเกอร์คุณภาพสูง ทั้งงานตกแต่งภายในและภายนอกอาคาร ทนแดด ทนฝน ไม่ลอกง่าย"
  },
  {
    id: 4,
    title: "งานไวนิล (Vinyl Banners)",
    description: "ป้ายไวนิลโฆษณา สแตนดี้ ธงญี่ปุ่น งานพิมพ์ขนาดใหญ่สำหรับงานอีเวนต์และโปรโมชั่น",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/images/vn/img-vn-01.webp",
    gallery: ["/images/vn/img-vn-02.webp",
              "/images/vn/img-vn-03.webp",
              "/images/vn/img-vn-04.webp",
              "/images/vn/img-vn-05.webp",
              "/images/vn/img-vn-06.webp",
              "/images/vn/img-vn-07.webp",
              "/images/vn/img-vn-08.webp",
              "/images/vn/img-vn-09.webp"],
    article: "งานพิมพ์ไวนิลความละเอียดสูง สีสันคมชัด เหมาะสำหรับงานโฆษณาทุกรูปแบบ พร้อมบริการออกแบบและติดตั้ง"
  },
  {
    id: 5,
    title: "งานบิวท์อิน (Built-in Furniture)",
    description: "รับออกแบบและตกแต่งภายใน เฟอร์นิเจอร์บิวท์อินสำหรับร้านค้า คลินิก และออฟฟิศ",
    icon: <Hammer className="w-8 h-8" />,
    image: "/images/bu/img-bu-03.webp",
    gallery: ["/images/bu/img-bu-01.webp",
              "/images/bu/img-bu-02.webp",
              "/images/bu/img-bu-04.webp",
              "/images/bu/img-bu-05.webp",
              "/images/bu/img-bu-06.webp",
              "/images/bu/img-bu-07.webp",
              "/images/bu/img-bu-08.webp",
              "/images/bu/img-bu-09.webp",
              "/images/bu/img-bu-10.webp"],
    article: "เปลี่ยนพื้นที่ว่างให้เป็นพื้นที่ใช้งานที่ลงตัว ด้วยงานบิวท์อินดีไซน์เฉพาะตัวที่สะท้อนภาพลักษณ์แบรนด์ของคุณ"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 13,
    title: "ชุดป้ายตัวอักษร COME HOME SAFE ติดป้อม รปภ. โรงงาน",
    category: "ป้ายตัวอักษร / โรงงาน",
    image: "/images/ex/guardhouse-sign/guardhouse-sign-01.webp",
    images: [
      "/images/ex/guardhouse-sign/guardhouse-sign-01.webp",
      "/images/ex/guardhouse-sign/guardhouse-sign-02.webp",
      "/images/ex/guardhouse-sign/guardhouse-sign-03.webp",
      "/images/ex/guardhouse-sign/guardhouse-sign-04.webp",
    ]
  },
  {
    id: 12,
    title: "ป้ายไม้แกะสลัก ศาลา เสียดฟ้า",
    category: "ป้ายไม้แกะสลัก",
    image: "/images/ex/carved-wood/carved-wood-01.webp",
    images: [
      "/images/ex/carved-wood/carved-wood-01.webp",
      "/images/ex/carved-wood/carved-wood-02.webp",
      "/images/ex/carved-wood/carved-wood-03.webp",
      "/images/ex/carved-wood/carved-wood-04.webp",
      "/images/ex/carved-wood/carved-wood-05.webp",
    ]
  },
  {
    id: 11,
    title: "ป้ายสถิติความปลอดภัยโรงงาน Nippon Steel Logistics",
    category: "ป้ายสถิติ / โรงงาน",
    image: "/images/ex/factory-statistics/factory-statistics-01.webp",
    images: [
      "/images/ex/factory-statistics/factory-statistics-01.webp",
      "/images/ex/factory-statistics/factory-statistics-02.webp",
      "/images/ex/factory-statistics/factory-statistics-03.webp",
      "/images/ex/factory-statistics/factory-statistics-04.webp",
    ]
  },
  {
    id: 10,
    title: "ป้ายตัวอักษรไฟ LED ออกหลัง ISAN Station 168",
    category: "ป้ายไฟ LED",
    image: "/images/ex/isan-station/isan-station-01.webp",
    images: [
      "/images/ex/isan-station/isan-station-01.webp",
      "/images/ex/isan-station/isan-station-02.webp",
      "/images/ex/isan-station/isan-station-03.webp",
      "/images/ex/isan-station/isan-station-04.webp",
      "/images/ex/isan-station/isan-station-05.webp",
      "/images/ex/isan-station/isan-station-06.webp",
    ]
  },
  {
    id: 9,
    title: "งานตกแต่งภายใน The Canteen @Suntory",
    category: "Interior / Corporate",
    image: "/images/ex/canteen/canteen-15.webp",
    images: [
      "/images/ex/canteen/canteen-15.webp",
      "/images/ex/canteen/canteen-18.webp",
      "/images/ex/canteen/canteen-11.webp",
      "/images/ex/canteen/canteen-12.webp",
      "/images/ex/canteen/canteen-14.webp",
      "/images/ex/canteen/canteen-13.webp",
      "/images/ex/canteen/canteen-16.webp",
      "/images/ex/canteen/canteen-19.webp",
      "/images/ex/canteen/canteen-17.webp",
      "/images/ex/canteen/canteen-08.webp",
      "/images/ex/canteen/canteen-09.webp",
      "/images/ex/canteen/canteen-10.webp",
    ]
  },
  {
    id: 5,
    title: "ป้ายไฟตัวอักษรหน้าร้าน SUGOI FIGURE",
    category: "ป้ายไฟ LED",
    image: "/images/led/img-led-03.webp",
    images: ["/images/led/img-led-03.webp"]
  },
  {
    id: 6,
    title: "ป้ายไวนิลหน้าร้านสถาบันสอนตัดผม Barber Academy",
    category: "ป้ายไวนิล",
    image: "/images/vn/img-vn-04.webp",
    images: ["/images/vn/img-vn-04.webp"]
  },
  {
    id: 7,
    title: "ป้ายไฟตัวอักษร LAEM CHABANG COUNTRY CLUB",
    category: "ป้ายไฟ LED",
    image: "/images/led/img-led-08.webp",
    images: ["/images/led/img-led-08.webp"]
  },
  {
    id: 8,
    title: "ป้ายไวนิลตั้งพื้นสำหรับประชาสัมพันธ์หน้าร้าน",
    category: "ป้ายไวนิล",
    image: "/images/vn/img-vn-08.webp",
    images: ["/images/vn/img-vn-08.webp"]
  },

  {
    id: 1,
    title: "งานตกแต่งภายใน Dr.Milk Clinic",
    category: "Medical / Clinic",
    image: "/images/ex/milk/drmilk-05.webp",
    images: [
      "/images/ex/milk/drmilk-01.webp",
      "/images/ex/milk/drmilk-02.webp",
      "/images/ex/milk/drmilk-03.webp",
      "/images/ex/milk/drmilk-04.webp",
      "/images/ex/milk/drmilk-05.webp",
    ]
  },
  {
    id: 2,
    title: "งานตกแต่งภายใน Kamon Coffee",
    category: "Interior / Cafe",
    image: "/images/ex/kamon/kamon-03.webp",
    images: [
      "/images/ex/kamon/kamon-01.webp",
      "/images/ex/kamon/kamon-02.webp",
      "/images/ex/kamon/kamon-03.webp",
      "/images/ex/kamon/kamon-04.webp",
    ]
  },
  {
    id: 3,
    title: "งานตกแต่งภายใน ห้องประชุม Brand's",
    category: "Interior / Corporate",
    image: "/images/ex/thebrain/thebrain-03.webp",
    images: [
      "/images/ex/thebrain/thebrain-01.webp",
      "/images/ex/thebrain/thebrain-02.webp",
      "/images/ex/thebrain/thebrain-03.webp",
      "/images/ex/thebrain/thebrain-04.webp",
      "/images/ex/thebrain/thebrain-05.webp",
    ]
  },
  {
    id: 4,
    title: "งานตกแต่งภายใน Office MLP",
    category: "School / Office",  
    image: "/images/ex/mlp/mlp-01.webp",
    images: [
      "/images/ex/mlp/mlp-01.webp",
      "/images/ex/mlp/mlp-02.webp",
      "/images/ex/mlp/mlp-03.webp",
      "/images/ex/mlp/mlp-04.webp",
      "/images/ex/mlp/mlp-05.webp", 
      "/images/ex/mlp/mlp-06.webp",
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
