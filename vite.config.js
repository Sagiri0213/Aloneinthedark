import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [react()],
    // **ส่วน Build นี้จะรวมไฟล์ HTML ย่อยทั้งหมดเข้าไปในโฟลเดอร์ dist**
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                // **ใส่คอมมา (,) หลังทุกบรรทัด ยกเว้นบรรทัดสุดท้าย**
                'DKnoNICHIJOUpart01': 'pages/japanese/DKnoNICHIJOUpart01.html',
                'DKnoNICHIJOUpart02': 'pages/japanese/DKnoNICHIJOUpart02.html',
                'DKnoNICHIJOUpart03': 'pages/japanese/DKnoNICHIJOUpart03.html',
                'DKnoNICHIJOUpart04': 'pages/japanese/DKnoNICHIJOUpart04.html',
                'DKnoNICHIJOUpart05': 'pages/japanese/DKnoNICHIJOUpart05.html',
                'dl-777-detail': 'pages/japanese/dl-777-detail.html',
                'DLS-7705-001': 'pages/japanese/DLS-7705-001.html',
                'DLS-7705-002': 'pages/japanese/DLS-7705-002.html',
                'DLS-7705-003': 'pages/japanese/DLS-7705-003.html',
                'DLS-7705-004': 'pages/japanese/DLS-7705-004.html',
                'DLS-7705-005': 'pages/japanese/DLS-7705-005.html',
                'DLS-7705-006': 'pages/japanese/DLS-7705-006.html',
                'PYM-334': 'pages/japanese/PYM-334.html',
                'T-415': 'pages/japanese/T-415.html',
                'ぷりぷりJKpart01': 'pages/japanese/ぷりぷりJKpart01.html',
                'ぷりぷりJKpart02': 'pages/japanese/ぷりぷりJKpart02.html',
                '制服Z世代の青空劣情日記＃露出マ': 'pages/japanese/エロ眼症候群/制服Z世代の青空劣情日記＃露出マ.html',
                '最新ハプニング映像！屋外イベ激烈ポロン01': 'pages/japanese/エロ眼症候群/最新ハプニング映像！屋外イベ激烈ポロン01.html',
                '最新ハプニング映像！屋外イベ激烈ポロン02': 'pages/japanese/エロ眼症候群/最新ハプニング映像！屋外イベ激烈ポロン02.html',
                '素人オメコ大図鑑　闇イベントに出演する訳あり女子集合01': 'pages/japanese/エロ眼症候群/素人オメコ大図鑑　闇イベントに出演する訳あり女子集合01.html',
                '素人オメコ大図鑑　闇イベントに出演する訳あり女子集合02': 'pages/japanese/エロ眼症候群/素人オメコ大図鑑　闇イベントに出演する訳あり女子集合02.html',
                'dlt-778-detail': 'pages/japanese/dl-778-detail.html',
                'dlt-8808-detail': 'pages/japanese/dlt-8808-detail.html'
            },
        },
    },
});
