//  CHAT SCRIPT    

(function (w, d) {
  w.CollectId = "6690d4f91063215eaa127c03";
  var h = d.head || d.getElementsByTagName("head")[0];
  var s = d.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.async = true;
  s.setAttribute("src", "https://collectcdn.com/launcher.js");
  h.appendChild(s);
})(window, document);


var swiper = new Swiper(".photoSwiper", {
  spaceBetween: 40,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop: true,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //     pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Another photo Slide
var swiper = new Swiper(".photo_swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1200,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

// const nav = document.body.querySelector('.nav');
// window.onscroll = function () {
//     if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
//         nav.style.backgroundColor = '#ffffff'
//         nav.style.border = 'none'
//         nav.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;'
//         // nav.classList.toggle('active')
//     }
//     else {
//         nav.style.backgroundColor = 'transparent';
//         nav.style.borderBottom = '2px solid 70ea04#'
//     }
// };
// ==================================== Home2 Slide ===============================================

var swiper = new Swiper(".home2Slider", {
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },

  // spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// ===================================FAQ==========================================================

const accordions = document.body.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  let icon = accordion.querySelector(".icon");
  let answer = accordion.querySelector(".answer");
  let question = accordion.querySelector(".question");

  accordion.addEventListener("click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
    question.classList.toggle("active");

    accordions.forEach((otherAcc) => {
      if (otherAcc !== accordion) {
        let otherIcon = otherAcc.querySelector(".icon");
        let otherAnswer = otherAcc.querySelector(".answer");
        let otherQuestion = otherAcc.querySelector(".question");

        otherIcon.classList.remove("active");
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });
  });
});

// const hamburger = document.body.querySelector(".mobile_menu");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("open");
//   document.body.querySelector(".mid_nav").classList.toggle("active");
//   document.body.classList.toggle("active");
// });

// -------------- Hamburger Menu ----------------

const menu = document.body.querySelector(".hamburger");
const cross = document.body.querySelector(".cross");

menu.addEventListener("click", () => {
  document.body.querySelector(".right_nav").classList.add("active");
});

cross.addEventListener("click", () => {
  document.body.querySelector(".right_nav").classList.remove("active");
});

// FAQ

const faqData = [
  {
    question: "WHO IS AN INSURANCE MARKETING FIRM ?",
    answer:
      "To enhance market reach and cater to diverse customer needs, insurance companies often collaborate with specialized entities known as Insurance Marketing Firms (IMFs). These firms act as intermediaries between insurers and customers, promoting and marketing insurance products effectively.",
  },
  {
    question: "IMF NORMALLY PROVIDE THE FOLLOWING SERVICES",
    answer:
      "Pre sales and after sales service to the clients Assess the risk of the client and decide the appropriate premium Recommend risk improvement and loss minimization measures Collection of premiums Claims assistance",
  },
  {
    question: "CAN WE SHIFT OUR INSURANCE POLICIES TO A2Z INSURE ?",
    answer:
      "Yes, you can shift your policies to A2Z Insure at the time of your policy’s annual renewal. You will continue to enjoy the same or better benefits at lower cost.",
  },

  {
    question: "WHAT IS DETARIFFING?",
    answer:
      "Previously the Premium rates and policy terms and conditions were fixed by Tariff Advisory Committee. Tariff stands in the way of brokers giving lower rates, wider choice of product and choice of insurers to their clients. But as of January, 2007 all such pricing controls have been removed and your premiums now depend on the risk that needs to be covered. In this scenario, brokers become important as they evaluate your risks, take quotations from various insurance companies and negotiate on your behalf to get you the best deal and take complete claims responsibility.",
  },

  {
    question: "WHAT IS IRDA ?",
    answer:
      "IRDA is Insurance Regulatory Development Authority, that has been set up to protect the interests of the policy holders, to regulate, promote and ensure orderly growth of the insurance industry and for matters connected therewith or incidental thereto. (N.B: from IRDA WEB PAGE)",
  },

  {
    question: "WHAT IS A CLAIM ?",
    answer:
      "A claim is the payment made by the insurer to the insured or claimant on the occurrence of the event specified in the contract, in return for the premiums paid for the insurance.",
  },

  {
    question: "DO IMF CHARGE ANY FEES FOR THE SERVICES RENDERED ?",
    answer:
      "No, IMF do not charge any fees to the clients FOR INSURANCE POLICY. Our services comes to you at ZERO cost and we also provide you claims assistance @ different algorithm. ",
  },

  {
    question: "DO ALL IMF HAVE COMPETENT PEOPLE IN THEIR MARKETING TEAM ? ",
    answer:
      "IMFs are bound by IRDA to have technically qualified personnel on their team. In A2Z Insurance, as per IRDA guidelines and our company’s training policy we have well qualified people to cater to all insurance needs of our clients.",
  },

  {
    question: "WHO TAKES CARE OF RENEWALS?",
    answer:
      "Yes timely renewals of our clients insurance policy is our responsibility. For which we provide reminders to all our client’s at least 1 month before their due date by sending them Renewal notice and then again making a reminder call every week. We send our representatives to collect the requisite cheque and also review your cover every year",
  },

  {
    question:
      "HOW MANY INSURANCE COMPANIES ARE CURRENTLY OPERATING IN THE COUNTRY?",
    answer:
      "Currently there are 26 Life Insurance Companies and 24 General Insurance Companies operating in India. The choice of products today can confound the best of professionals and hence you need experts like us to choose the best product as per your needs",
  },

  {
    question: "HOW DOES INSURANCE WORK?",
    answer:
      "When you buy a policy you make regular payments, known as premiums, to the insurer. If you make a claim your insurer will pay out for the loss that is covered under the policy. If you don’t make a claim, you won’t get your money back; instead it is pooled with the premiums of other policyholders who have taken out insurance with the same insurance company. If you make a claim the money comes from the pool of policyholders’ premiums.",
  },

  {
    question: "HOW DO INSURANCE COMPANIES WORK?",
    answer:
      "Insurance companies assess the risk and charge premiums for various types of insurance coverage. If an insured event occurs and you suffer damages, the insurance company pays you up to the agreed amount of the insurance policy. Insurance companies pays you for your losses and still makes a profit.",
  },

  {
    question: "WHAT ARE THE 5 PARTS OF AN INSURANCE POLICY?",
    answer:
      "Every insurance policy has five parts: declarations, insuring agreements, definitions, exclusions and conditions. Many policies contain a sixth part: endorsements.",
  },

  {
    question: "RISK, PERIL AND HAZARD: ARE THEY THE SAME THING OR DIFFERENT?",
    answer:
      "Risk, peril, and hazard are terms used to indicate the possibility of loss, and are often used interchangeably, but the insurance industry distinguishes these terms. A risk is simply the possibility of a loss, but a peril is a cause of loss. A hazard is a condition that increases the possibility of loss. For instance, fire is a peril because it causes losses, while a fireplace is a hazard because it increases the probability of loss from fire. Some things can be both a peril and a hazard. Smoking, for instance, causes cancer and other health ailments, while also increasing the probability of such ailments. Many fundamental risks, such as hurricanes, earthquakes, or unemployment, that affect many people are generally insured by society or by the government, while particular risks that affect individuals or specific organizations, such as losses from fire or vandalism, are considered the particular responsibilities of those affected.",
  },

  {
    question: "WHAT CAN BE INSURED?",
    answer:
      "Insurance can be taken for both, tangible and intangible assets. Tangible assets are those that can be touched and felt, example: car, human being etc. & Intangible assets are those which cannot be touched or felt, example: a singer insuring her voice",
  },
];

const faqContainer = document.getElementById("faq-container");

const createFAQSection = () => {
  faqData.forEach((faq, index) => {
    const faqDiv = document.createElement("div");
    faqDiv.classList.add("faqs");

    let faqOpen = index === 0;

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<h4>${index + 1}. ${faq.question
      }</h4><div class="icon">${faqOpen ? "<span>-</span>" : "<span>+</span>"
      }</div>`;
    questionDiv.addEventListener("click", () => {
      const answerDiv = faqDiv.querySelector(".answers");
      answerDiv.style.display =
        answerDiv.style.display === "none" || answerDiv.style.display === ""
          ? "block"
          : "none";
      faqOpen = !faqOpen;
      questionDiv.querySelector(".icon").textContent = faqOpen ? "-" : "+";
    });

    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answers");
    answerDiv.style.display = faqOpen ? "block" : "none";
    answerDiv.innerHTML = `<p>${faq.answer}</p>`;

    faqDiv.appendChild(questionDiv);
    faqDiv.appendChild(answerDiv);
    faqContainer.appendChild(faqDiv);
  });
};

createFAQSection();

