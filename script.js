var transition = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
  },
});

transition.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange"
);
transition.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
transition.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
transition.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
transition.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

var transition2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
  },
});

transition2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
transition2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  },
  "ca"
);

transition2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
transition2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);

transition2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "42%",
    top: "204%",
  },
  "ca"
);
transition2.to(
  "#fanta",
  {
    width: "35%",
    top: "210%",
    left: "33%",
  },
  "ca"
);
