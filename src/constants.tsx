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
    description: "รับผลิตและติดตั้งป้ายตัวอักษร อะคริลิค พลาสวูด ซิงค์ สแตนเลส สำหรับหน้าร้านและอาคาร",
    icon: <Layout className="w-8 h-8" />,
    image: "/images/service-signage.jpg",
    gallery: ["/images/gallery-1.jpg", "/images/gallery-2.jpg"],
    article: "ป้ายตัวอักษรช่วยเพิ่มความโดดเด่นให้กับธุรกิจของคุณ เราใช้วัสดุคุณภาพสูง ทนทานต่อสภาพอากาศ พร้อมทีมงานติดตั้งมืออาชีพ"
  },
  {
    id: 2,
    title: "ป้ายไฟ LED (LED Signage)",
    description: "ป้ายไฟตัวอักษร ตู้ไฟ LED ประหยัดพลังงาน สว่างสม่ำเสมอ โดดเด่นทั้งกลางวันและกลางคืน",
    icon: <Box className="w-8 h-8" />,
    image: "/images/service-led.jpg",
    gallery: ["/images/gallery-3.jpg", "/images/gallery-4.jpg"],
    article: "เพิ่มการมองเห็นให้ร้านค้าของคุณด้วยป้ายไฟ LED ดีไซน์ทันสมัย เราใช้ชิป LED เกรดพรีเมียม ให้ความสว่างสูงและอายุการใช้งานที่ยาวนาน"
  },
  {
    id: 3,
    title: "งานสติกเกอร์ (Sticker Graphics)",
    description: "สติกเกอร์ติดกระจก สติกเกอร์ไดคัท สติกเกอร์ติดรถยนต์ งานพิมพ์คุณภาพสูง สีสดทนทาน",
    icon: <Monitor className="w-8 h-8" />,
    image: "/images/service-sticker.jpg",
    gallery: ["/images/gallery-5.jpg", "/images/gallery-6.jpg"],
    article: "ตกแต่งพื้นที่ของคุณด้วยงานสติกเกอร์คุณภาพสูง ทั้งงานตกแต่งภายในและภายนอกอาคาร ทนแดด ทนฝน ไม่ลอกง่าย"
  },
  {
    id: 4,
    title: "งานไวนิล (Vinyl Banners)",
    description: "ป้ายไวนิลโฆษณา สแตนดี้ ธงญี่ปุ่น งานพิมพ์ขนาดใหญ่สำหรับงานอีเวนต์และโปรโมชั่น",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/images/service-vinyl.jpg",
    gallery: ["/images/gallery-7.jpg", "/images/gallery-8.jpg"],
    article: "งานพิมพ์ไวนิลความละเอียดสูง สีสันคมชัด เหมาะสำหรับงานโฆษณาทุกรูปแบบ พร้อมบริการออกแบบและติดตั้ง"
  },
  {
    id: 5,
    title: "งานบิวท์อิน (Built-in Furniture)",
    description: "รับออกแบบและตกแต่งภายใน เฟอร์นิเจอร์บิวท์อินสำหรับร้านค้า คลินิก และออฟฟิศ",
    icon: <Hammer className="w-8 h-8" />,
    image: "/images/service-builtin.jpg",
    gallery: ["/images/gallery-9.jpg", "/images/gallery-10.jpg"],
    article: "เปลี่ยนพื้นที่ว่างให้เป็นพื้นที่ใช้งานที่ลงตัว ด้วยงานบิวท์อินดีไซน์เฉพาะตัวที่สะท้อนภาพลักษณ์แบรนด์ของคุณ"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "งานตกแต่งคลินิกทันตกรรม",
    category: "Medical / Clinic",
    image: "/images/project-1.jpg"
  },
  {
    id: 2,
    title: "ป้ายไฟอาคารสำนักงานใหญ่",
    category: "Corporate / Office",
    image: "/images/project-2.jpg"
  },
  {
    id: 3,
    title: "งานสติกเกอร์ตกแต่งร้านกาแฟ",
    category: "Retail / Cafe",
    image: "/images/project-3.jpg"
  },
  {
    id: 4,
    title: "เฟอร์นิเจอร์บิวท์อินออฟฟิศสมัยใหม่",
    category: "Interior / Office",
    image: "/images/project-4.jpg"
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
