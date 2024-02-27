import React from 'react';

const SidebarItem = (props) => {
  const getColorClass = (articleTag) => {
    switch (articleTag) {
      case 'Travel':
        return 'bg-purple-300';
      case 'Interior Design':
        return 'bg-purple-700';
      case 'DIY':
        return 'bg-purple-500';
      default:
        return 'bg-purple-100';
    }
  };

  return (
    <div>
      <ul>
        <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
          <a href="#" className="flex items-center text-gray-600 cursor-pointer">
            <span className={`inline-block h-4 w-4 ${getColorClass(props.articleTag)} mr-3`}></span>
            {props.articleTag}
            <span className="text-gray-500 ml-auto">{props.articleNumber}</span>
            <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarItem;
