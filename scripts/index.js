document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-container").classList.remove("before-load");

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("contact-form__status");
  let isLoading = false;

  const setLoading = async (loading) => {
    const loadingPrefix = "sending";
    if (loading) isLoading = true;
    else isLoading = false;

    let numDots = 3;
    while (isLoading) {
      formStatus.innerHTML =
        loadingPrefix + [...Array(numDots).keys()].map((_) => ".").join("");
      if (numDots < 3) {
        numDots++;
      } else {
        numDots = 0;
      }
      await new Promise((r) => setTimeout(r, 400));
    }
  };

  contactForm.onsubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mjvjyadj", {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          Accept: "application/json",
        },
      });
      setLoading(false);
      if (response.ok) {
        formStatus.innerHTML = "Thanks for your submission!";
        contactForm.reset();
        setTimeout(() => {
          formStatus.innerHTML = "";
        }, 6000);
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            formStatus.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            formStatus.innerHTML =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    } catch {
      setLoading(false);
      formStatus.innerHTML = "Oops! There was a problem submitting your form";
    }
  };

  document.getElementById("copyright-year").innerHTML =
    new Date().getFullYear();

  document.getElementById("know-more-heading").onclick = () => {
    document.getElementById("know-more-gif").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("know-more-gif").classList.add("hidden");
    }, 4000);
  };
});
