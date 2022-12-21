dataSetVersion = "2022-12-20"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Media",
    key: "media",
    tooltip: "Check this to restrict to certain pieces of media.",
    checked: false,
    sub: [
    { name: "Manga", tooltip: "Characters that appear in the manga", key: "manga" },
    { name: "Axis Powers (S1/S2)", tooltip: "Characters that appear in the first and second seasons of the anime", key: "aph" },
    { name: "World Series (S3/S4)", tooltip: "Characters that appear in the third and fourth seasons of the anime", key: "wsh" },
    { name: "The Beautiful World (S5)", tooltip: "Characters that appear in the fifth season of the anime", key: "htwb" },
    { name: "The World Twinkle (S6)", tooltip: "Characters that appear in the sixith season of the anime", key: "htwt" },
    { name: "World☆Stars (S7)", tooltip: "Characters that appear in the seventh season of the anime", key: "hws" },
    ]
  },
  {
    name: "Remove Micronations",
    key: "micronation",
    checked: false,
    tooltip: "Check this to remove all micronations."
  },
  {
    name: "Remove Non-nations",
    key: "nonnation",
    tooltip: "Check this to remove all non-nations."
  },
  {
    name: "Remove Musical Duplicates",
    key: "hetamyu",
    tooltip: "Check this to remove musical duplicates."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "North Italy",
    img: "VNS1cJl.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "North Italy (Hetamyu)",
    img: "Y4Pxgiu.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "South Italy / Romano",
    img: "TFhcxs6.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "South Italy / Romano (Hetamyu)",
    img: "dHBr9Yd.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "Germany",
    img: "9Nn2o2u.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "Germany (Hetamyu)",
    img: "nTyM7Wo.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "Japan",
    img: "Ppe8pJW.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "Japan (Hetamyu)",
    img: "FHejmTR.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "America",
    img: "ZTM5oNS.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "America (Hetamyu)",
    img: "OOv1l91.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "England",
    img: "KD863sM.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "England (Hetamyu)",
    img: "k7VrGKb.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "France",
    img: "zmi81vT.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "France (Hetamyu)",
    img: "Hoha2rN.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "Russia",
    img: "8vqGpxs.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "Russia (Hetamyu)",
    img: "BXuZdlN.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
  {
    name: "China",
    img: "gSBZSWP.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
    }
  },
  {
    name: "China (Hetamyu)",
    img: "PZSYVqf.png",
    opts: {
      media: ["manga", "aph", "wsh", "htwb", "htwt", "hws"],
      hetamyu: true
    }
  },
];
