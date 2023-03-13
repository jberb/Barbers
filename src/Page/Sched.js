import React from "react";

function Sched() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <div class="py-5 ">
        <p class="font-crimson text-gray-800 text-center font-bold">
          Contact Information:
        </p>
        <div class="flex text-xs py-1 font-crimson ">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 13"
            width="9"
            height="13"
          >
            <defs>
              <image
                width="9"
                height="13"
                id="img1"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAGxQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg+zge4AAAACR0Uk5TAGPN789me/+CJM56ySqI8u6MrOqrkq5VqZQzOtTaQcwZHIqkWqYkmwAAAFhJREFUeJwtzEcOgDAMRNGBABN6r6Fz/zviBP7CepItA/B8FYSQIto0EJNJmpE5CpayqFijoRK17NCTwziRMxZ+GWB12OTEOO32obzgYYFTdDlB88bfY8cL8FwDwfAFjb8AAAAASUVORK5CYII="
              />
            </defs>
            <style></style>
            <use href="#img1" x="0" y="0" />
          </svg>
          <p class="">123 Your Address here</p>
        </div>
        <div class="flex text-xs py-1 font-crimson">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.75rem"
            viewBox="0 0 24 24"
            width="0.75rem"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
          </svg>
          <p class="">(046)123 - 456</p>
        </div>
        <div class="flex text-xs py-1 font-crimson">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            pp1
            height="0.75rem"
            viewBox="0 0 24 24"
            width="0.75rem"
            fill="#d9a520"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <p class="">youremail@gmail.com</p>
        </div>
      </div>
      <div class="py-5">
        <p class="font-crimson text-gray-800 text-center font-bold ">
          Working Hours:
        </p>
        <div className="flex  justify-between ">
          <div className="py-1 ">
            <p class="text-sm font-crimson py-1">Monday to Friday </p>
            <p class="flex text-xs py-1 font-crimson">Saturday </p>
            <p class="flex text-xs py-1 font-crimson ">Sunday </p>
          </div>
          <div className="py-2 px-1 flex flex-col items-end">
            <p class="text-sm font-crimson py-1">9 AM - 6 PM </p>
            <p class="flex text-xs py-1 font-crimson">9 AM - 5 PM </p>
            <p class="flex text-xs py-1 font-crimson ">9 AM - 12 NN </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sched;
