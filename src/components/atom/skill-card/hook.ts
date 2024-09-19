import azure from "@/public/skill/azure.png";
import docker from "@/public/skill/docker.png";
import github from "@/public/skill/github.png";
import mysql from "@/public/skill/mysql.png";
import nextjs from "@/public/skill/nextjs.png";
import python from "@/public/skill/python.png";
import pytorch from "@/public/skill/pytorch.png";
import sass from "@/public/skill/sass.png";
import typescript from "@/public/skill/typescript.png";
import tailwindcss from "@/public/skill/tailwindcss.png";
import fastapi from "@/public/skill/fastapi.png";
import nestjs from "@/public/skill/nestjs.png";
import storybook from "@/public/skill/storybook.png";
import prisma from "@/public/skill/prisma.png";
import { StaticImageData } from "next/image";

// SkillDict インターフェースの定義
export interface SkillDict {
  azure: StaticImageData;
  docker: StaticImageData;
  github: StaticImageData;
  mysql: StaticImageData;
  nextjs: StaticImageData;
  python: StaticImageData;
  pytorch: StaticImageData;
  sass: StaticImageData;
  typescript: StaticImageData;
  tailwindcss: StaticImageData;
  fastapi: StaticImageData;
  nestjs: StaticImageData;
  storybook: StaticImageData;
  prisma: StaticImageData;
}

// skill_dict オブジェクトの定義
const skill_dict: SkillDict = {
  azure: azure,
  docker: docker,
  github: github,
  mysql: mysql,
  nextjs: nextjs,
  python: python,
  pytorch: pytorch,
  sass: sass,
  typescript: typescript,
  tailwindcss: tailwindcss,
  fastapi: fastapi,
  nestjs: nestjs,
  storybook: storybook,
  prisma: prisma,
};

export default skill_dict;
