export type Experience = {
  title: string;
  content: string;
  date: string;
};

export interface ExperienceProps {
  experiences: Experience[];
}

export const experienceData: Experience[] = [
  {
    title: "滝中学校",
    content: "愛知県私立滝中学校普通科に入学・卒業しました",
    date: "2015/4 - 2018/3",
  },
  {
    title: "FLL世界大会出場",
    content:
      "FLL(First Lego League)に出場し、カリフォルニアの世界大会まで進出しました。MindStormを用いてロボットを作り、プログラムを記述しました。",
    date: "2017/8",
  },
  {
    title: "滝高等学校",
    content: "愛知県私立滝中学校普通科に入学・卒業しました",
    date: "2018/4 - 2021/3",
  },
  {
    title: "名古屋大学情報学部コンピュータ科学科入学",
    content:
      "名古屋大学情報学部コンピュータ科学科に入学しました. 現在も在学中です。",
    date: "2021/4 - Now",
  },
  {
    title: "アプリ開発団体jack に入部",
    content:
      "名古屋大学インカレサークルのアプリ開発団体jackに入りました。私がこの道に進むことになったキッカケがこのサークルです。",
    date: "2021/7 - Now",
  },
  {
    title: "アプリ開発団体jack 代表に就任",
    content:
      "サークルの代表を１年務めました。ちょうどコロナ明けの時期で、ノウハウがなく大変でしたが、メンバーと協力して様々な体制を作り上げました。",
    date: "2022/4 - 2023/2",
  },
  {
    title: "技育CAMP ハッカソン vol.4 最優秀賞受賞",
    content:
      "サークルのメンバーとハッカソンに出場し、最優秀賞を受賞しました。この時の作品が旧CODE_DUELです。",
    date: "2022/6",
  },
  {
    title: "株式会社Aixtal インターン",
    content:
      "名大初ベンチャーの株式会社Aixtalにて、webインターン生として勤め始めました。Next.jsを用い、サイトの開発を行っています。",
    date: "2022/6 - Now",
  },
  {
    title: "技育展2022 優秀賞",
    content:
      "技育CAMPの作品をさらにリファクタしたCODE_DUELを出展し、優秀賞を獲得しました。",
    date: "2022/9",
  },
  {
    title: "アプリ開発団体jack 副代表に就任",
    content:
      "役員の1人が忙しくなった関係で、副代表を数ヶ月務めました。代表で培ったノウハウを元に、当代表を支えました。",
    date: "2023/11 - 2024/2",
  },
  {
    title: "名古屋大学大学院情報学研究科知能システム系合格",
    content: "大学院入試に合格し、情報学研究科知能システム系に合格しました。",
    date: "2024/8",
  },
  {
    title: "LINEヤフー株式会社 インターン",
    content:
      "LINEヤフー株式会社にインターンとして2週間参加しました。生成AIを用いたYahoo Shopping!の改善に取り組みました。",
    date: "2024/8",
  },
];
