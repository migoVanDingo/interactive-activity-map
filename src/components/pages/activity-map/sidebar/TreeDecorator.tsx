import { faFile, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TreeDecorator = ({ node, onToggle, onClick }: any) => {

  
  const handleClick = (e: any) => {
    e.preventDefault();
    if (onToggle) {
      onToggle(node, !node.toggled);
    }
    if (onClick) {
      onClick(node);
    }
  };

  return (
    <div  onClick={handleClick}>
      <div >
        <FontAwesomeIcon icon={node.children ? faFolder : faFile} />
        &nbsp;
        {node.name}
      </div>
    </div>
  );
};

export default TreeDecorator;