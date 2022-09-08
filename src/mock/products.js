const products = [
    {
        id: "0",
        name: "Notebook Asus",
        price: 465000,
        detail:
          "Notebook ASUS ROG ZEPHYRUS 14 WQHD RYZEN 9 4900HS 16GB 1TB SSD NVMe RTX 2060",
        category: "Notebook", 
        stock: 4, 
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30646_Notebook_Gamer_AORUS_XD_15.6__Core_I7_11800H_16GB__2x8GB__1TB_SSD_NVMe_RTX_3070_240Hz_W11_Home_316bec6c-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30550_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_046846fe-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30551_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_47c1a3d7-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30552_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_853dba93-grn.jpg"
      },
      {
        id: "1",
        name: "Notebook XPG",
        price: 470000,
        detail:
          "Notebook Gamer XPG XENIA 15.6 Core I7 11800H 32GB (2x16GB) 1TB SSD NVMe RTX 3070 165Hz W10",
        category: "Notebook",
        stock: 3,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26535_Notebook_ASUS_ROG_ZEPHYRUS_14__WQHD_RYZEN_9_4900HS_16GB_1TB_SSD_NVMe_RTX_2060_b8ffd6ee-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30550_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_046846fe-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30551_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_47c1a3d7-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30552_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_853dba93-grn.jpg"
      },
      {
        id: "2",
        name: "Notebook Asus",
        price: 280000,
        detail:
          "Notebook ASUS UX5401 OLED 14 Core I5 1135G7 8GB 512GB SSD W10 Home ",
        category: "Notebook",
        stock: 4,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30592_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_f059b8fd-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30593_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_7ea488bb-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30595_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_74a029f2-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30596_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_6b05ca28-grn.jpg"
      },
      {
        id: "3",
        name: "Notebook Aorus",
        price: 532000,
        detail:
          "Notebook Gamer AORUS XD 15.6 Core I7 11800H 16GB (2x8GB) 1TB SSD NVMe RTX 3070 240Hz W11 Home",
        category: "Notebook",
        stock: 2,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30568_Notebook_Gamer_ASUS_ROG_ZEPHYRUS_G14_14__Ryzen_7_5800HS_16GB__2x8GB__512GB_SSD_RTX_3050_144Hz_W10_ANIME_MATRIX_5d444937-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30652_Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_13b6b32f-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30595_Notebook_ASUS_UX5401_OLED__14__Core_I5_1135G7_8GB_512GB_SSD_W10_Home_74a029f2-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30653_Notebook_Gamer_AORUS_KD_15.6__Core_I7_11800H_16GB__2x8GB__512GB_SSD_NVMe_RTX_3060_240Hz_W11_de468d8e-grn.jpg"
      },

      {
        id: "4",
        name: "Notebook Acer",
        price: 250000,
        detail:
          "Notebook Gamer Acer NITRO 5 15.6 Core I5 10300H 8GB 1TB HDD GTX1650 W11 Home",
        category: "Notebook",
        stock: 5,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31309_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_b12c2cc8-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31310_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_4fa6ba6b-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31190_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_c2b57603-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31191_Notebook_Gamer_Acer_NITRO_5_15.6__Core_I5_10300H_8GB_1TB_HDD_GTX1650_W11_Home_828954dc-grn.jpg"
      },

      {
        id: "5",
        name: "Notebook Asus",
        price: 325000,
        detail:
          "Notebook Gamer Asus TUF FX516 15.6 FHD Core I5 11300H 16GB 512GB SSD NVMe RTX 3050 Freedos 144hz",
        category: "Notebook",
        stock: 4,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32597_Notebook_Gamer_Asus_TUF_FX516_15.6__FHD_Core_I5_11300H_16GB_512GB_SSD_NVMe_RTX_3050_Freedos_144hz_6713aed9-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32598_Notebook_Gamer_Asus_TUF_FX516_15.6__FHD_Core_I5_11300H_16GB_512GB_SSD_NVMe_RTX_3050_Freedos_144hz_d2988fc2-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32599_Notebook_Gamer_Asus_TUF_FX516_15.6__FHD_Core_I5_11300H_16GB_512GB_SSD_NVMe_RTX_3050_Freedos_144hz_07f8c474-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32600_Notebook_Gamer_Asus_TUF_FX516_15.6__FHD_Core_I5_11300H_16GB_512GB_SSD_NVMe_RTX_3050_Freedos_144hz_2b7c3b7c-grn.jpg"
      },

      {
        id: "6",
        name: "Monitor LG",
        price: 153000,
        detail:
          "Monitor Gamer LG 34 UltraGear 34GL750 Ultra Wide Curvo 144Hz 1ms ",
        category: "Monitores",
        stock: 7,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17179_Monitor_Gamer_LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms_2859a4b1-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17181_Monitor_Gamer_LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms_a07c0235-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17182_Monitor_Gamer_LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms_661508ae-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17183_Monitor_Gamer_LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms_6ae5a9a9-grn.jpg"
      },

      {
        id: "7",
        name: "Monitor BENQ",
        price: 188000,
        detail:
          "Monitor Gamer BENQ Zowie 24.5 XL2546 240Hz",
        category: "Monitores",
        stock: 10,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33374_Monitor_Gamer_BENQ_Zowie_24.5__XL2546_240Hz_399926f4-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33375_Monitor_Gamer_BENQ_Zowie_24.5__XL2546_240Hz_571e92ee-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33377_Monitor_Gamer_BENQ_Zowie_24.5__XL2546_240Hz_85591db4-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33378_Monitor_Gamer_BENQ_Zowie_24.5__XL2546_240Hz_11a2b591-grn.jpg"
      },

      {
        id: "8",
        name: "Monitor LG",
        price: 69000,
        detail:
          "Monitor LG 26 26WQ500-B UltraWide 21:9 ",
        category: "Monitores",
        stock: 12,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33354_Monitor_LG_26__26WQ500-B_UltraWide_21_9_161a12c9-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33355_Monitor_LG_26__26WQ500-B_UltraWide_21_9_47ff2042-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33357_Monitor_LG_26__26WQ500-B_UltraWide_21_9_e40ff04d-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33358_Monitor_LG_26__26WQ500-B_UltraWide_21_9_3db347aa-grn.jpg"
      },

      {
        id: "9",
        name: "Teclado Redragon",
        price: 5000,
        detail:
          "Teclado Redragon Shiva K512 White RGB ESP",
        category: "Teclados",
        stock: 4,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28592_Teclado_Redragon_Shiva_K512_White_RGB_ESP_28459d4e-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29800_Teclado_Mecanico_Redragon_Kumara_K552-KR_White_Rainbow_Espa__ol_Switch_Outemu_RED_TKL_cd947367-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29801_Teclado_Mecanico_Redragon_Kumara_K552-KR_White_Rainbow_Espa__ol_Switch_Outemu_RED_TKL_f03a65b9-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29802_Teclado_Mecanico_Redragon_Kumara_K552-KR_White_Rainbow_Espa__ol_Switch_Outemu_RED_TKL_e66e74cc-grn.jpg"
      },

      {
        id:"10",
        name: "Teclado Redragon",
        price: 10900,
        detail:
          "Teclado Mecanico Inalambrico Redragon Draconic K530W-RGB White ",
        category: "Teclados",
        stock: 8,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21938_Teclado_Mecanico_Inalambrico_Redragon_Draconic_K530W-RGB_White_7dcf0bf5-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21939_Teclado_Mecanico_Inalambrico_Redragon_Draconic_K530W-RGB_White_f8d73984-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21941_Teclado_Mecanico_Inalambrico_Redragon_Draconic_K530W-RGB_White_f3427729-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21942_Teclado_Mecanico_Inalambrico_Redragon_Draconic_K530W-RGB_White_9cacf474-grn.jpg"
      },

      {
        id:"11",
        name: "Teclado HP",
        price: 21900,
        detail:
          "Teclado Mecanico HP HyperX Alloy Elite 2 RGB Switch Red LA",
        category: "Teclados",
        stock: 7,
        image:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19905_Teclado_Mecanico_HP_HyperX_Alloy_Elite_2_RGB_Switch_Red_LA_72df56cb-grn.jpg",
          image1:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19906_Teclado_Mecanico_HP_HyperX_Alloy_Elite_2_RGB_Switch_Red_LA_cf7d5df5-grn.jpg",
          image2:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19908_Teclado_Mecanico_HP_HyperX_Alloy_Elite_2_RGB_Switch_Red_LA_0da167c1-grn.jpg",
          image3:
          "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19909_Teclado_Mecanico_HP_HyperX_Alloy_Elite_2_RGB_Switch_Red_LA_e6826926-grn.jpg"
      }

]




export default products;