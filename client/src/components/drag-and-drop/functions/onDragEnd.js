import { updateTitles } from '../../../store/reducers/titles/actions';

export const onDragEnd = (result, columns, dispatch, update_reducer) => {
  if (!result.destination) return;
  const { source, destination } = result;
  // console.log('%cSOURCE ', 'color:green;', source);
  // console.log('%cDestination ', 'color:yellow;', destination);

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    // setColumns({
    //   ...columns,
    //   [source.droppableId]: {
    //     ...sourceColumn,
    //     items: sourceItems,
    //   },
    //   [destination.droppableId]: {
    //     ...destColumn,
    //     items: destItems,
    //   },
    // });
  } else {
    //Get source column and copy the items to not modify the original array
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];

    //Re-order the array with the indexes
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    console.log('COPY ', copiedItems);

    //Add an order system with the indexes
    const addedIndexCopy = [...copiedItems];
    addedIndexCopy.map((item, index) => {
      item.rank = index;
    });

    // console.log('ANOTHER ', addedIndexCopy);
    console.log('COLUMNS ', columns);

    let updatedColumn = {
      ...columns,
      [source.droppableId]: {
        ...column,
        items: addedIndexCopy,
      },
    };

    //Set new items with the ordered array
    dispatch(update_reducer(updatedColumn));

    fetch('/titles/find-and-update-document', {
      method: 'PATCH',
      body: JSON.stringify({ ...updatedColumn }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // setColumns({
    //   ...columns,
    //   [source.droppableId]: {
    //     ...column,
    //     items: addedIndexCopy,
    //   },
    // });
  }
};
