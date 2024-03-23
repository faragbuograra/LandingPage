import React from "react";

const Logo = (props:any) => {
  return (
    <>
      {props.isScrolled ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9365 12.8371C30.2473 11.1716 29.2327 9.6592 27.9309 8.33828C25.3848 5.79215 22.0155 4.35636 18.4165 4.27979C19.5651 5.88787 20.1968 7.76396 20.2926 9.6592C20.6946 9.75492 21.0966 9.88893 21.4795 10.0612C22.5324 10.5015 23.4896 11.1333 24.3128 11.9565C25.9591 13.6028 26.878 15.8044 26.878 18.1399C26.878 20.4755 25.9783 22.6579 24.3128 24.3234C22.6664 25.9697 20.4648 26.8887 18.1293 26.8887C15.7938 26.8887 13.6114 25.9889 11.9458 24.3234C10.7972 23.1747 10.0315 21.7964 9.66773 20.3223C7.77249 20.2266 5.89639 19.614 4.26917 18.4654C4.34574 22.0453 5.78153 25.4146 8.32766 27.9416C10.9504 30.5643 14.4345 32.0001 18.1293 32.0001C21.8241 32.0001 25.3082 30.5643 27.9309 27.9416C30.5536 25.3189 31.9894 21.8347 31.9894 18.1399C31.9894 16.283 31.6257 14.4834 30.9365 12.8371ZM9.55286 16.551C9.85916 14.8663 10.6632 13.2582 11.965 11.9756C13.2285 10.7121 14.8174 9.88893 16.5212 9.56348C16.3872 8.14684 15.7746 6.74934 14.6834 5.65814C14.4154 5.39013 14.1474 5.1604 13.8602 4.94982C11.8118 5.61985 9.91659 6.76848 8.3468 8.33828C6.75786 9.92722 5.60923 11.8225 4.95834 13.89C5.16893 14.1771 5.39865 14.4452 5.64752 14.7132C6.71958 15.7852 8.11708 16.417 9.55286 16.551Z"
                    fill="white"
                  />
                  <path
                    d="M20.2925 9.65916C19.6033 9.48686 18.8758 9.39114 18.1292 9.39114C17.574 9.39114 17.038 9.44858 16.5211 9.54429C16.6934 11.3821 16.0808 13.2965 14.6833 14.694C13.2858 16.0915 11.3906 16.7041 9.55277 16.5318C9.32305 17.7761 9.36133 19.0588 9.68678 20.3031C9.83993 20.3031 10.0122 20.3223 10.1654 20.3223C12.7689 20.3223 15.3725 19.3268 17.3443 17.355C19.3161 15.3832 20.2925 12.7796 20.2925 10.176C20.2925 10.0037 20.2925 9.83145 20.2925 9.65916ZM10.1462 3.782C10.9694 3.782 11.7926 3.93515 12.5584 4.24145C12.9987 4.41375 13.439 4.66262 13.841 4.94978C15.2002 4.50947 16.6551 4.27974 18.1292 4.27974C18.2249 4.27974 18.3206 4.27974 18.4164 4.27974C18.0909 3.83943 17.7272 3.39912 17.3252 2.9971C13.3624 -0.965669 6.93007 -0.965669 2.96729 2.9971C1.05291 4.91149 0 7.45762 0 10.176C0 12.8945 1.05291 15.4406 2.96729 17.355C3.36931 17.757 3.80962 18.1399 4.26907 18.4462C4.26907 18.3505 4.26907 18.2356 4.26907 18.1207C4.26907 16.6467 4.4988 15.23 4.93911 13.8708C4.17336 12.7987 3.75219 11.5161 3.75219 10.1569C3.75219 8.4531 4.42222 6.84501 5.62829 5.63895C6.87264 4.41375 8.519 3.782 10.1462 3.782Z"
                    fill="white"
                  />{" "}
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9364 12.8371C30.2472 11.1716 29.2326 9.6592 27.9308 8.33828C25.3847 5.79215 22.0154 4.35636 18.4163 4.27979C19.565 5.88787 20.1967 7.76396 20.2924 9.6592C20.6945 9.75492 21.0965 9.88893 21.4793 10.0612C22.5323 10.5015 23.4894 11.1333 24.3126 11.9565C25.959 13.6028 26.8779 15.8044 26.8779 18.1399C26.8779 20.4755 25.9781 22.6579 24.3126 24.3234C22.6663 25.9697 20.4647 26.8887 18.1292 26.8887C15.7936 26.8887 13.6112 25.9889 11.9457 24.3234C10.7971 23.1747 10.0313 21.7964 9.6676 20.3223C7.77236 20.2266 5.89627 19.614 4.26904 18.4654C4.34562 22.0453 5.78141 25.4146 8.32754 27.9416C10.9502 30.5643 14.4344 32.0001 18.1292 32.0001C21.8239 32.0001 25.3081 30.5643 27.9308 27.9416C30.5535 25.3189 31.9893 21.8347 31.9893 18.1399C31.9893 16.283 31.6256 14.4834 30.9364 12.8371ZM9.55274 16.551C9.85904 14.8663 10.6631 13.2582 11.9649 11.9756C13.2284 10.7121 14.8173 9.88893 16.5211 9.56348C16.3871 8.14684 15.7745 6.74934 14.6833 5.65814C14.4153 5.39013 14.1473 5.1604 13.8601 4.94982C11.8117 5.61985 9.91647 6.76848 8.34668 8.33828C6.75774 9.92722 5.60911 11.8225 4.95822 13.89C5.1688 14.1771 5.39853 14.4452 5.6474 14.7132C6.71945 15.7852 8.11695 16.417 9.55274 16.551Z"
                    fill="#191AFE"
                  />
                  <path
                    d="M20.2925 9.65916C19.6033 9.48686 18.8758 9.39114 18.1292 9.39114C17.574 9.39114 17.038 9.44858 16.5211 9.54429C16.6934 11.3821 16.0808 13.2965 14.6833 14.694C13.2858 16.0915 11.3906 16.7041 9.55277 16.5318C9.32305 17.7761 9.36133 19.0588 9.68678 20.3031C9.83993 20.3031 10.0122 20.3223 10.1654 20.3223C12.7689 20.3223 15.3725 19.3268 17.3443 17.355C19.3161 15.3832 20.2925 12.7796 20.2925 10.176C20.2925 10.0037 20.2925 9.83145 20.2925 9.65916ZM10.1462 3.782C10.9694 3.782 11.7926 3.93515 12.5584 4.24145C12.9987 4.41375 13.439 4.66262 13.841 4.94978C15.2002 4.50947 16.6551 4.27974 18.1292 4.27974C18.2249 4.27974 18.3206 4.27974 18.4164 4.27974C18.0909 3.83943 17.7272 3.39912 17.3252 2.9971C13.3624 -0.965669 6.93007 -0.965669 2.96729 2.9971C1.05291 4.91149 0 7.45762 0 10.176C0 12.8945 1.05291 15.4406 2.96729 17.355C3.36931 17.757 3.80962 18.1399 4.26907 18.4462C4.26907 18.3505 4.26907 18.2356 4.26907 18.1207C4.26907 16.6467 4.4988 15.23 4.93911 13.8708C4.17336 12.7987 3.75219 11.5161 3.75219 10.1569C3.75219 8.4531 4.42222 6.84501 5.62829 5.63895C6.87264 4.41375 8.519 3.782 10.1462 3.782Z"
                    fill="#2C2C2C"
                  />
                </svg>
              )}
    </>
  );
}

export default Logo;