def Import_Load_Profile_Data(Input_Output_Data_Directory_Location=None, OSESMO_Git_Repo_Directory=None, delta_t=None, Load_Profile_Name_Input=None):

    # Load Python Packages
    import os
    import numpy as np

    # Set Directory to Box Sync Folder
    os.chdir(Input_Output_Data_Directory_Location)


    # Import Load Profile Data

    if Load_Profile_Name_Input == "Suncode_2019_Load_Profile_Vector":

        Load_Profile_Master_Index = "R1"

        if delta_t == (60 / 60):
            Load_Profile_Data = np.genfromtxt(
                'Load Profile Data/Suncode_2019_Load_Profile_Vector.csv', delimiter=',')


    # Return to OSESMO Git Repository Directory
    os.chdir(OSESMO_Git_Repo_Directory)


    return Load_Profile_Data, Load_Profile_Master_Index