import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectWebmapId } from '@store/Map/selectors';
import classNames from 'classnames';
import { updateWebmapId } from '@store/Map/thunks';

const WebMapOptions = [
    { name: 'Topo', id: '67372ff42cd145319639a99152b15bc3' },
    { name: 'Imagery', id: '86265e5a4bbb4187a59719cf134e0018' },
];

/**
 * Select a web map to be used in the Map View
 */
const WebMapSelector = () => {
    const dispatch = useDispatch();

    const webmapId = useSelector(selectWebmapId);

    return (
        <div className="absolute right-4 top-4 flex py-2 px-3 z-10 bg-slate-900 text-sm">
            {WebMapOptions.map(({ name, id }) => {
                // if true, this web map is selected
                const isSelected = id === webmapId;

                return (
                    <div
                        key={id}
                        className={classNames(
                            'px-2 pb-1 cursor-pointer border-b-2',
                            {
                                'border-blue-300': isSelected,
                                'border-transparent': !isSelected,
                                'text-white': isSelected,
                                'text-gray-300': !isSelected,
                            }
                        )}
                        onClick={() => {
                            dispatch(updateWebmapId(id));
                        }}
                    >
                        {name}
                    </div>
                );
            })}
        </div>
    );
};

export default WebMapSelector;
