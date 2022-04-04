import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Hoa Gây Nghiện',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/7/2/7/e/727e8710ac52bf0e128bf63cfcd441fd.jpg',
        },
        {
            id: 2,
            name: 'Guitar C-Pop',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/6/8/3/f683fb9a596520bc1c270c668596ce68.jpg'
        },
        {
            id: 3,
            name: 'Top Hits US-UK',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/5/e/f/f/5effc2dc7380a8f28c5e8587265727a4.jpg'
        },
    ];

    return (
        <div>
            <h2>Chắc là bạn sẽ thích đấy!</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;