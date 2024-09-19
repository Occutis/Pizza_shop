tailwind.config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Mymontserrat: ["Playwrite CU, cursive;"],
        Bitter: ["Bitter, serif;"],
        tohama: ["Open Sans, Arial, Tahoma, sans-serif;"],
        Montserrat: ["Montserrat, serif;"],
      },
      colors: {
        primary: "#D19000",
        Mylight: "#ffffff",
        pizzatitle: "#478F00",
        boutoncouleur: "#68564D",
        bthover: "#5D4D45",
        bthoverround: "#80695E",
        browner: "#473427",
        call: "#E4585E",
      },

      backgroundImage: {
        navimage: "url(./img/first-front.jpg)",
        bodyimage: "url(./img/boispur3.png)",
        footerimage: "url(./img/bodybis2.png)",
      },
    },
  },
  plugins: [],
};
