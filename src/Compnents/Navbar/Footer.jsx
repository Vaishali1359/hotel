import React from 'react';

const Footer = () => {
  return React.createElement(
    'footer',
    { className: 'bg-black text-white rounded-b-3xl' },
    React.createElement(
      'div',
      {
        className:
          'max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0',
      },

      // Address Section (UPDATED: text-center on all screens)
      React.createElement(
        'div',
        { className: 'w-full md:w-auto text-center' },
        React.createElement(
          'h3',
          { className: 'font-semibold mb-2' },
          'Address'
        ),
        React.createElement(
          'p',
          { className: 'text-sm leading-relaxed' },
          '742 Evergreen Terrace',
          React.createElement('br'),
          'Brooklyn, NY 11201'
        )
      ),

      // Center Logo & Social Icons
      React.createElement(
        'div',
        { className: 'w-full md:w-auto flex flex-col items-center space-y-4' },
        React.createElement(
          'h1',
          { className: 'text-2xl tracking-widest font-light' },
          'ALMARIS'
        ),
        React.createElement(
          'div',
          { className: 'flex space-x-6 text-gray-400' },

          // Facebook
          React.createElement(
            'a',
            {
              href: '#',
              'aria-label': 'Facebook',
              className: 'hover:text-white transition-colors duration-300',
            },
            React.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                className: 'w-5 h-5',
                viewBox: '0 0 24 24',
              },
              React.createElement('path', {
                d: 'M22.675 0h-21.35C.596 0 0 .595 0 1.33v21.34c0 .736.596 1.33 1.325 1.33h11.49v-9.294H9.69v-3.622h3.125V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.594 1.324-1.33V1.33c0-.735-.595-1.33-1.324-1.33z',
              })
            )
          ),

          // Instagram
          React.createElement(
            'a',
            {
              href: '#',
              'aria-label': 'Instagram',
              className: 'hover:text-white transition-colors duration-300',
            },
            React.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                className: 'w-5 h-5',
                viewBox: '0 0 24 24',
              },
              React.createElement('path', {
                d: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.253 2.243 1.314 3.608.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.243 1.253-3.608 1.314-1.265.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.253-2.243-1.314-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.243-1.253 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.014 7.052.072 5.773.13 4.56.428 3.468 1.52 2.376 2.612 2.078 3.825 2.02 5.104.964 8.332.964 15.668 2.02 18.896c.058 1.28.356 2.493 1.448 3.585 1.092 1.092 2.305 1.39 3.585 1.448 3.228 1.056 10.564 1.056 13.792 0 1.28-.058 2.493-.356 3.585-1.448 1.092-1.092 1.39-2.305 1.448-3.585 1.056-3.228 1.056-10.564 0-13.792-.058-1.28-.356-2.493-1.448-3.585C19.393.428 18.18.13 16.9.072 15.62.014 15.216 0 12 0z',
              }),
              React.createElement('path', {
                d: 'M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z',
              }),
              React.createElement('circle', {
                cx: '18.406',
                cy: '5.594',
                r: '1.44',
              })
            )
          ),

          // Twitter
          React.createElement(
            'a',
            {
              href: '#',
              'aria-label': 'Twitter',
              className: 'hover:text-white transition-colors duration-300',
            },
            React.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                className: 'w-5 h-5',
                viewBox: '0 0 24 24',
              },
              React.createElement('path', {
                d: 'M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.95.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.166-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.734.2-1.52.232-2.224.084.626 1.956 2.444 3.377 4.6 3.418-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.423-.015-.63.962-.689 1.8-1.56 2.46-2.548l-.047-.02z',
              })
            )
          ),

          // YouTube
          React.createElement(
            'a',
            {
              href: '#',
              'aria-label': 'YouTube',
              className: 'hover:text-white transition-colors duration-300',
            },
            React.createElement(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'currentColor',
                className: 'w-5 h-5',
                viewBox: '0 0 24 24',
              },
              React.createElement('path', {
                d: 'M19.615 3.184c-1.155-.042-5.772-.042-5.772-.042s-4.617 0-5.772.042c-1.301.047-2.273 1.053-2.318 2.372-.052 1.583-.052 4.855-.052 4.855s0 3.272.052 4.855c.045 1.319 1.017 2.325 2.318 2.372 1.155.042 5.772.042 5.772.042s4.617 0 5.772-.042c1.301-.047 2.273-1.053 2.318-2.372.052-1.583.052-4.855.052-4.855s0-3.272-.052-4.855c-.045-1.319-1.017-2.325-2.318-2.372zM10.048 15.568v-7.136l6.179 3.568-6.179 3.568z',
              })
            )
          )
        )
      ),

      // Contact Us Section
      React.createElement(
        'div',
        { className: 'w-full md:w-auto text-center ' },
        React.createElement(
          'h3',
          { className: 'font-semibold mb-2' },
          'Contact Us'
        ),
        React.createElement(
          'p',
          { className: 'text-sm leading-relaxed' },
          'T. +929 333 9296',
          React.createElement('br'),
          'M. contact@almaris.com'
        )
      )
    ),

    // Bottom copyright
    React.createElement(
      'div',
      {
        className:
          'border-t border-gray-800 text-center text-gray-500 text-xs py-4',
      },
      'Copyright 2024 • Almaris by Designesia'
    )
  );
};

export default Footer;
