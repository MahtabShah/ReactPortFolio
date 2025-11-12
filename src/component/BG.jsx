import "/src/styles/BG.css";

function BGSection() {
  const ad = `
  rgba(255, 2, 2, 0) calc(39.6%), 
  rgba(2, 15, 255, 0) calc(44.7%),
  #030f38 calc(44.7%),
  #030f38 calc(44.8%), 
  rgba(2, 15, 255, 0) calc(44.8%), 
  rgba(2, 15, 255, 0) calc(50%),
  rgba(2, 15, 255, 0) calc(50.1%)`;

  const lineat50 = ` rgba(255, 2, 2, 0) calc(49.6%), 
  rgba(2, 15, 255, 0) calc(49.7%),
  #030f38 calc(49.7%),
  #030f38 calc(49.8%), 
  rgba(2, 15, 255, 0) calc(49.8%), 
  rgba(2, 15, 255, 0) calc(50%),
  rgba(2, 15, 255, 0) calc(50.1%)`;

  const style = {
    background: `linear-gradient(180deg, ${gxv(22)}),
    linear-gradient(180deg, ${ad}) , 
    linear-gradient(180deg, ${lineat50}) , 
    linear-gradient(0deg, ${gxv(22)}) , 
    linear-gradient(0deg, ${ad}) , 
    linear-gradient(90deg, ${gxv(22)}),
    linear-gradient(90deg, ${ad}) , 
    linear-gradient(270deg, ${gxv(22)}),
    linear-gradient(270deg, ${ad}) , 
    linear-gradient(270deg, ${lineat50}) , 
    radial-gradient(at center, #020b35e0 10%, #010b35de)

   `,
  };

  const stle = {
    background: `linear-gradient(180deg,#350202 10%,#350202)
   `,
  };

  console.log(style.background);
  return (
    <main>
      <section style={{ background: style.background }}></section>
      {/* <section></section> */}
    </main>
  );
}

export default BGSection;

function gxv(k) {
  const colors = ["#020fff00", "#020fff00", "#030f38", "#030f38"];
  let colorstr = ``;
  const n = 4;

  for (let i = 0; i < k; i++) {
    colorstr +=
      colors[i % n] +
      ` calc(` +
      calcHeight(i + 1, 10) +
      `)` +
      (i == k - 1 ? " " : " , ");
  }

  function calcHeight(k, p) {
    let str2px = ` 0%`;
    let strpercentage = ` 9%`;
    let for5enter = false;

    if (k == 1) {
      return " 0%";
    }

    for (let i = 1; i <= k; i++) {
      if (i % 4 == 0) {
        str2px += ` + 0.1%`;
        for5enter = true;
      } else if (for5enter) {
        str2px += ` + 0.1%`;
        for5enter = false;
      }

      if (i > 2 && (i - 2) % 4 == 0) {
        strpercentage += ` + ${p - (i - 2) / 4}%`;
      }
    }

    return str2px + " +" + strpercentage;
  }

  return colorstr;
}
