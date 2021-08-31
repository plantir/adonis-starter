"use strict";
const Slide = use("App/Models/Slide");
const Project = use("App/Models/Project");
class HomeController {
  slides() {
    return Slide.query()
      .where({ is_deleted: false })
      .orderBy("sort_order", "desc")
      .fetch();
  }

  about({ request, lang }) {
    if (lang == "en") {
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    }
    return `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
      `;
  }

  async projects({ lang }) {
    let projects = await Project.query()
      .where({ is_deleted: false })
      .orderBy("id", "DESC")
      .limit(6)
      .fetch();
    projects = projects.toJSON();
    projects = projects.map((x) => {
      if (lang == "en") {
        x.title = x.en_title;
        x.description = x.en_description;
      }
      delete x.en_description;
      delete x.en_title;
      return x
    });
    return projects;
  }

  articles() {
    return [
      {
        id: 1,
        image: "/img/news1.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 2,
        image: "/img/news2.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 3,
        image: "/img/news3.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 4,
        image: "/img/news4.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 5,
        image: "/img/news1.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 6,
        image: "/img/news2.jpg",
        title: "صنایع و کارخانجات",
      },
      {
        id: 7,
        image: "/img/news3.jpg",
        title: "صنایع و کارخانجات",
      },
    ].slice(0, 4);
  }
  map() {
    const map = [
      {
        top: 37.5,
        left: 42.98,
        city: "تهران",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 24.75,
        left: 50.92,
        city: "گلستان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 18.25,
        left: 31.14,
        city: "آذربایجان شرقی",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 24.25,
        left: 35.04,
        city: "گیلان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 31.25,
        left: 45.79,
        city: "مازندران",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 33.75,
        left: 41.27,
        city: "البرز",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 35.54,
        left: 31.64,
        city: "کردستان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 41.6,
        left: 61.83,
        city: "خراسان رضوی",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 46.25,
        left: 54.82,
        city: "سمنان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 46.5,
        left: 42.74,
        city: "قم",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 46.0,
        left: 31.14,
        city: "کرمانشاه",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 56.75,
        left: 32.36,
        city: "لرستان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 58.25,
        left: 46.28,
        city: "اصفهان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 66.25,
        left: 55.68,
        city: "کرمان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 72.75,
        left: 46.4,
        city: "فارس",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 81.0,
        left: 41.15,
        city: "بوشهر",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
      {
        top: 79.5,
        left: 68.74,
        city: "سیستان و بلوچستان",
        projectsCount: 26,
        projectsDone: 221.1,
        power: "IPP / خود تامین",
      },
    ];
    return map;
  }
}

module.exports = HomeController;
