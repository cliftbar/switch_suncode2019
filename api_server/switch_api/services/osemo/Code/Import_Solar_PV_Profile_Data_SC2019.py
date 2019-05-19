def Import_Solar_PV_Profile_Data(Input_Output_Data_Directory_Location=None, OSESMO_Git_Repo_Directory=None, delta_t=None, Solar_Profile_Name_Input=None, Solar_Size_Input=None):

    # Load Python Packages
    import os
    import numpy as np

    # Set Directory to Box Sync Folder
    os.chdir(Input_Output_Data_Directory_Location)

    # Import Solar PV Generation Profile Data.
    # Scale base 10-kW or 100-kW profile to match user-input PV system size.

    if Solar_Profile_Name_Input == "Suncode_2019_PVWatts_Vector":

        Solar_Profile_Master_Index = "R1"
        Solar_Profile_Description = "PVWatts"

        if delta_t == (60 / 60):
            Solar_PV_Profile_Data = np.genfromtxt(
                'Solar PV Data/Suncode_2019_PVWatts_Vector.csv', delimiter=',')


        # Solar_PV_Profile_Data = (Solar_Size_Input / 10) * Solar_PV_Profile_Data    # Rescale 10 kW profile to user-input PV system size.


    # Return to OSESMO Git Repository Directory
    os.chdir(OSESMO_Git_Repo_Directory)

    return Solar_Profile_Master_Index, Solar_Profile_Description, Solar_PV_Profile_Data