fetch("https://api.ipify.org?format=json")
  .then(r => r.json())
  .then(r => {
    r.site = "blog"
    fetch("https://whirlwindlightblueinteger.andrewdoumont.repl.co/target", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(r),
    })
  })
