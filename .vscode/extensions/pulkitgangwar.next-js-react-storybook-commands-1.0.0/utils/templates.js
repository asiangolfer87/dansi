const template = {
  component: (fileName) => {
    return `
      import React from "react";
      import PropTypes from "prop-types";
          
        const ${fileName} = ({}) => {
            return (
                <div>This is ${fileName} component</div>
            )
        }
          
      ${fileName}.propTypes = {
          
      }
          
      export default ${fileName};
     `;
  },
  page: (fileName) => {
    return `
      const ${fileName} = ({}) => {
        return (
            <div>This is ${fileName} component</div>
          )
      }
          
      export default ${fileName};
              `;
  },
  story: (fileName) => {
    fileName = `${fileName}Component`;
    return `
      import React from "react";
          
      //import component here   
      //import ${fileName} from "";
          
      export default {
          title:"",  
          component:${fileName} 
      }
          
      const Template = (args) => <${fileName} {...args} />
          
      ${fileName}.args = {}
              `;
  },
};

module.exports = template;
